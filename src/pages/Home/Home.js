import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { push } from 'react-router-redux'

import './Home.css'
import Button from '../../components/Button'
import Timeline from '../../components/Timeline'
import TimeInput from '../../components/TimeInput'

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
  }

  static defaultProps = {
    classes: [{ name: 'Class A' }, { name: 'Class B' }],
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

  renderDropdown(name, options = [], defaultText = 'Select...') {
    const { time } = this.props
    return (
      <select defaultValue={time[name]} onChange={(e) => this.handleDataChange(name, e.target.value)} name={name} className="home-dropdown">
        {options.map(item => (<option key={item} value={item}>{item}</option>))}
      </select>
    )
  }


  renderStats() {
    return (
      <div className="home-stats-container">
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
    const { classes } = this.props
    return (
      <div className="home-bottom">
        <div className="ui container">
          <div className="home-filter-container">
            <h4 className="ui grey header">Filters</h4>
            {classes.map((item, index) => (<div key={index} className="home-filter">{item.name}</div>))}
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
    const { classes, time, dispatch } = this.props
    const { fromReset, toReset, start, end } = time
		return (
      <div>
        <div className="home-container">
          <div className="home-text">
            <div>
              <span>
                I served for 
              </span>
              {this.renderDropdown('class', classes.map((item) => item.name), 'class')}
            </div>
            <div>
              <span>
                from
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
            <div>
              <span>
                to
              </span>
              <TimeInput
                hours={end.hours}
                minutes={end.minutes}
                onChange={(data) => dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { ...end, ...data }}})}
              />
              <select
                defaultValue={end.period} onChange={(period) => dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { ...end, period }}})}
                className="home-dropdown"
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
              <span>
                on
              </span>
              <DatePicker
                selected={end.date}
                onChange={(date) => dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { ...end, date }}})}
                />
            </div>
          </div>
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
  ...state.student
})
export default connect(mapStateToProps)(Home)
