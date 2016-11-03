import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import DatePicker from 'react-datepicker'
import TimeInput from 'react-time-input'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import { STUDENT_EDIT_TIME } from '../../redux/actions/action-types'


class EnterTime extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    to: PropTypes.string,
    toPeriod: PropTypes.string,
    from: PropTypes.string,
    fromPeriod: PropTypes.string,
    startDate: PropTypes.instanceOf(moment),
    endDate: PropTypes.instanceOf(moment),
    dispatch: PropTypes.func,
  }
  constructor (props) {
    super(props)
    this.state = {
      warning: '',
    }
  }

  componentWillMount () {
    this.props.dispatch({ type: 'NAVBAR_ALT' })
  }

  componentWillReceiveProps (props) {
    const { toPeriod, fromPeriod } = props
    if (toPeriod === 'am' && fromPeriod === 'pm') {
      this.setState({ warning: 'You have invalid times'})
    } else {
      this.setState({ warning: '' })
    }
  }

  handleDataChange (type, val) {
    const { dispatch } = this.props
    dispatch({ type: STUDENT_EDIT_TIME, payload: { [type] : val }})
  }

  render () {
    const { warning } = this.state
    const { to, toPeriod, from, fromPeriod, startDate, endDate, dispatch } =this.props
    return (
      <div className="ui container">
        <div className="ui two column centered grid">
          <div className="column">
            <h4 className="ui dividing header">Student Time Tracker</h4>
            <div className={`ui ${warning ? 'warning' : ''} form`}>
              <div className="three fields">
                <div className="field">
                  <label>Start Time</label>
                    <TimeInput
                      initTime={from}
                      ref="TimeInputWrapper"
                      className='form-control'
                      mountFocus='true'
                      onTimeChange={(val) => this.handleDataChange('from', val)}
                    />
                </div>
                <div className="field">
                 <label>    ‌ ‍ ‎ ‏</label>
                  <select onChange={(e) => this.handleDataChange('fromPeriod', e.target.value)} defaultValue={fromPeriod.toUpperCase()} className="ui fluid dropdown">
                    <option>PM</option>
                    <option>AM</option>
                  </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    value={startDate}
                    selected={moment()}
                    onChange={() => {}} />
                </div>
              </div>
              <div className="three fields">
                <div className="field">
                  <label>End Time</label>
                    <TimeInput
                      initTime={to}
                      ref="TimeInputWrapper"
                      className='form-control'
                      mountFocus='true'
                      onTimeChange={(val) => this.handleDataChange('to', val)}
                    />
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <select onChange={(e) => this.handleDataChange('toPeriod', e.target.value.toLowerCase())}  defaultValue={toPeriod.toUpperCase()} className="ui fluid dropdown">
                    <option>PM</option>
                    <option>AM</option>
                  </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    vale={endDate}
                    selected={moment()}
                    onChange={() => {}} />
                </div>
              </div>
              {
                warning ?
                <div className="ui warning message">
                  <ul className="list">
                    <p>{warning}</p>
                  </ul>
                </div> : null
              }
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

const mapStateToProps = (state) => ({ ...state.student.time })

export default connect(mapStateToProps)(EnterTime)
