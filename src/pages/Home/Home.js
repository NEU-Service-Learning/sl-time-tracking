import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimeInput from 'react-time-input'
import { push } from 'react-router-redux'

import './Home.css'
import Button from '../../components/Button'
import Timeline from '../../components/Timeline'
import { STUDENT_EDIT_TIME } from '../../redux/actions/action-types'

class Home extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    loading: PropTypes.bool,
    error: PropTypes.string,
    time: PropTypes.object,
  }

  static defaultProps = {
    classes: [{ name: 'Class A' }, { name: 'Class B' }],
  }

  onClickSubmit = () => {
    // const { to, toPeriod, from, fromPeriod, startDate, endDate } = this.state
    const { dispatch } = this.props
    dispatch(push('/enter-time'))
  }

  handleDataChange (type, val) {
    const { dispatch } = this.props
    dispatch({ type: STUDENT_EDIT_TIME, payload: { [type] : val }})
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
            <div className="ui grid">
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
    const { classes, time } = this.props
    const { from, to, startDate, endDate } = time
		return (
      <div>
        <div className="home-container">
          <div className="home-text">
            <div>
              <span>
                I served at
              </span>
              {this.renderDropdown('class', classes.map((item) => item.name), 'class')}
            </div>
            <div>
              <span>
                from
              </span>
              <TimeInput
                initTime={from}
                ref="TimeInputWrapper"
                className='form-control'
                mountFocus='true'
                onTimeChange={(val) => this.handleDataChange('from', val)}
              />
            {this.renderDropdown('fromPeriod', ['am', 'pm'], 'fromPeriod')}
              <span>
                on
              </span>
              <DatePicker
                selected={startDate}
                onChange={(val) => this.handleDataChange('startDate', val)}
                />
            </div>
            <div>
              <span>
                to
              </span>
              <TimeInput
                initTime={to}
                ref="TimeInputWrapper"
                className='form-control'
                mountFocus='true'
                onTimeChange={(val) => this.handleDataChange('to', val)}
              />
            {this.renderDropdown('toPeriod', ['am', 'pm'], 'toPeriod')}
              <span>
                on
              </span>
              <DatePicker
                selected={endDate}
                onChange={(val) => this.handleDataChange('endDate', val)} />
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
