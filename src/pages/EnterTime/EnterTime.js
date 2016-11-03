import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class EnterTime extends Component {
  constructor (props) {
    super(props)
    props.dispatch({ type: 'NAVBAR_ALT' })
  }
  render () {
    return (
      <div className="ui container">
        <div className="ui two column centered grid">
          <div className="column">
            <h4 className="ui dividing header">Student Time Tracker</h4>
            <div className="ui form">
              <div className="three fields">
                <div className="field">
                  <label>Start Time</label>
                  <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                 <label>    ‌ ‍ ‎ ‏</label>
                  <select className="ui fluid dropdown">
                    <option>PM</option>
                    <option>AM</option>
                  </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    selected={moment()}
                    onChange={() => {}} />
                </div>
              </div>
              <div className="three fields">
                <div className="field">
                  <label>End Time</label>
                  <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <select className="ui fluid dropdown">
                    <option>PM</option>
                    <option>AM</option>
                  </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    selected={moment()}
                    onChange={() => {}} />
                </div>
              </div>
              <button className="ui left floated button" type="submit">
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

export default connect()(EnterTime)
