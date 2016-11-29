import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { Header, Divider, Card, Image, Dropdown } from 'semantic-ui-react'

import { STUDENT_EDIT_TIME } from '../../redux/actions/action-types'
import TimeInput from '../../components/TimeInput'


class EnterTime extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    time: PropTypes.object,
    dispatch: PropTypes.func,
  }
  constructor (props) {
    super(props)
    this.state = {
      warning: '',
      defaultServiceTypes: [{'value': 'direct', 'text': 'Direct Service'}, {'value': 'group', 'text': 'Group Research'}, {'value': 'individual', 'text': 'Individual Research'}, {'value': 'training', 'text': 'Training'}],
      defaultProjectTypes: [{'value': 'direct', 'text': 'Project A'}, {'value': 'group', 'text': 'Project B'}, {'value': 'individual', 'text': 'Project C'}],
    }
  }

  componentWillMount () {
    this.props.dispatch({ type: 'NAVBAR_ALT' })
  }

  componentWillReceiveProps (props) {
    const { time } = props
    const { start, end } = time
    if (start.period === 'am' && end.period === 'pm') {
      this.setState({ warning: 'You have invalid times'})
    } else {
      this.setState({ warning: '' })
    }
  }

  render () {
    const { warning, defaultServiceTypes, defaultProjectTypes } = this.state
    const src = 'http://semantic-ui.com/images/avatar/large/daniel.jpg'
    const { time, dispatch } = this.props
    const { start, end, selectedService, selectedProject } = time
    return (
      <div className="ui container">
        <div className="ui two column centered grid">
          <div className="column">
            <Header dividing as="h4">
              <Header.Content>
                Entering Time
              </Header.Content>
            </Header>
            <div className={`ui ${warning ? 'warning' : ''} form`}>
              <div className="field">
                <label>Type of Service‏</label>
                <Dropdown defaultValue={selectedService} placeholder='Select Type of Service' fluid selection options={defaultServiceTypes} />
              </div>
              <br/>
              <div className="field">
                <label>Project</label>
                <Dropdown defaultValue={selectedProject} placeholder='Select Project' fluid selection options={defaultProjectTypes} />
              </div>
              <br/>
              <div className="three fields">
                <div className="two field">
                  <label>Start Time</label>
                    <TimeInput
                      className="two fields"
                      spanClassName="vertical-center"
                      hours={start.hours}
                      minutes={start.minutes}
                      onChange={(data) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, ...data }}})}
                    />
                </div>
                <div className="field">
                 <label>    ‌ ‍ ‎ ‏</label>
                   <select
                     defaultValue={start.period} onChange={(period) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, period }}})}
                     className="ui dropdown"
                   >
                     <option value="am">AM</option>
                     <option value="pm">PM</option>
                   </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    selected={start.date}
                    onChange={(date) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, date }}})}
                    />
                </div>
              </div>
              <div className="three fields">
                <div className="field">
                  <label>End Time</label>
                    <TimeInput
                      className="two fields"
                      spanClassName="vertical-center"
                      hours={end.hours}
                      minutes={end.minutes}
                      onChange={(data) => dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { ...end, ...data }}})}
                    />
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <select
                    defaultValue={end.period} onChange={(period) => dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { ...end, period }}})}
                    className="ui dropdown"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    selected={end.date}
                    onChange={(date) => dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { ...end, date }}})}
                    />
                </div>
              </div>
              <Header dividing as="h4">
                <Header.Content>
                  Additional Group Members
                  <Header.Subheader>
                    Anyone else that served
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Card.Group itemsPerRow={6}>
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
              </Card.Group>
              {
                warning ?
                <div className="ui warning message">
                  <ul className="list">
                    <p>{warning}</p>
                  </ul>
                </div> : null
              }
              <Divider />
              <button onClick={() => dispatch(push('/'))} className="ui left floated button" type="submit">
                Back
              </button>
              <button className="ui animated fade right floated button" type="submit">
                <div className="visible content">Submit Time</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.student })

export default connect(mapStateToProps)(EnterTime)
