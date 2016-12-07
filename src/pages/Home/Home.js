import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { push } from 'react-router-redux'
import { Input, Dimmer, Loader, Message } from 'semantic-ui-react'

import './Home.css'
import Button from '../../components/Button'
import Timeline from '../../components/Timeline'
import TimeInput from '../../components/TimeInput'
import { getCourses } from '../../redux/actions/courses'
import { getProjects } from '../../redux/actions/projects'

import { STUDENT_EDIT_TIME } from '../../redux/actions/action-types'
const date = moment(new Date())
const prevDate = moment(new Date()).subtract(1, 'hours')

class Home extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    loading: PropTypes.bool,
    error: PropTypes.string,
    time: PropTypes.object,
    dispatch: PropTypes.func,
    courses: PropTypes.object,
    services: PropTypes.array,
    user: PropTypes.object,
  }

  static defaultProps = {
    classes: [{ name: 'CS 4500: Software Development' }, { name: 'ANTH 5513: Ancient Greek History' }],
    services: [{'value': 'direct', 'text': 'Direct Service'}, {'value': 'group', 'text': 'Group Research'}, {'value': 'individual', 'text': 'Individual Research'}, {'value': 'training', 'text': 'Training'}],
    projects: [{'value': 'direct', 'text': 'Project A'}, {'value': 'group', 'text': 'Project B'}, {'value': 'individual', 'text': 'Project C'}],
  }

  onClickSubmit = () => {
    // const { to, toPeriod, from, fromPeriod, startDate, endDate } = this.state
    const { dispatch } = this.props
    dispatch(push('/enter-time'))
  }

  handleStartChange (type, val) {
    const { dispatch } = this.props
    dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { [type] : val }}})
  }

  handleEndChange (type, val) {
    const { dispatch } = this.props
    dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { [type] : val }}})
  }

  editHours = (hours) => {
    const { dispatch } = this.props
    if (hours > 0) {
      dispatch({ type: STUDENT_EDIT_TIME, payload: { hours }})
    }
  }

  renderStats() {
    return (
      <div className="home-stats-container container">
        <div className="home-stats-header">
          <span>Total Time</span>
          <span>
            3:00:00
          </span>
        </div>
        <div className="home-stats-block">
          <div>Class A</div>
          <div className="home-timeline-row flex-space-between pad-top">
            <div style={{ width: '90px' }} className="home-stats-bar" />
            <div className="home-stats-time">
              3:10:30
            </div>
          </div>
        </div>
        <div className="home-stats-block">
          <div>Class B</div>
          <div className="home-timeline-row flex-space-between">
            <div style={{ width: '120px' }} className="home-stats-bar" />
            <div className="home-stats-time">
              4:30:30
            </div>
          </div>
        </div>

      </div>
    )
  }

  renderBottom() {
    const { courses, user } = this.props
    const { enrollments } = user
    return (
      <div className="home-bottom">
        <div className="ui container">
          <div className="home-filter-container">
            <h4 className="ui grey header">Filters</h4>
            {Object.keys(enrollments).map(key => (<div key={key} className="home-filter">{enrollments[key].course}</div>))}
          </div>
          <div className="home-timeline-container">
            <h3 className="ui dividing header home-header">Timeline</h3>
            <div className="ui stackable two column grid">
              <div className="ten wide column">
                <Timeline />
              </div>
              <div className="six wide column">
                {this.renderStats()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

	render () {
    const { time, dispatch, loading, user } = this.props
    const { enrollments } = user
    const { fromReset, toReset, start, end, selectedService, selectedProject, selectedCourse, selectedEnrollment } = time
		return (
      <div>
        <Dimmer active={loading}>
          <Loader />
        </Dimmer>
        <div className="home-container">
          <div className="home-text">
            <div>
              <span>
                I completed
              </span>
              <input onChange={(e) => this.editHours(e.target.value)} type='number' value={time.hours} placeholder='Hours...' />
              <span>
                hour{parseInt(time.hours) === 1 ? '' : 's'} for
              </span>
              <select defaultValue={selectedEnrollment} onChange={(e) => dispatch({ type: 'STUDENT_EDIT_TIME', payload: { selectedEnrollment: e.target.value }})} name='selectedCourse' className="home-dropdown">
                {Object.keys(enrollments).map(key => (<option key={key} value={key}>{enrollments[key].course}</option>))}
              </select>
            </div>
            <div>
              <span>
                on
              </span>
              <TimeInput
                hours={start.hours}
                minutes={start.minutes}
                onChange={(data) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, ...data }}})}
              />
              <select
                defaultValue={start.period} onChange={(period) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, period }}})}
                className="home-dropdown"
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
              <span>
                on
              </span>
              <DatePicker
                selected={start.date}
                onChange={(date) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, date }}})}
                />
            </div>
          </div>
          <br/>
          <div className="ui large buttons">
            <Button onClick={this.onClickSubmit} className="ui button home-button">
              Submit Time
            </Button>
          </div>

        </div>
        {this.renderBottom()}
      </div>
		)
	}
}

const mapStateToProps = (state) => ({
  ...state.student,
  user: state.auth.user,
  loading: state.courses.loading || state.projects.loading,
})
export default connect(mapStateToProps)(Home)
