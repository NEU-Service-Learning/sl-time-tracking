import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './Home.css'
import Button from '../../components/Button'

class Home extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    loading: PropTypes.bool,
  }

  static defaultProps = {
    classes: [{ name: 'Class A' }, { name: 'Class B' }],
    loading: false,
  }

  constructor(props) {
    super(props)
    const date = moment(new Date())
    const prevDate = moment(new Date()).subtract(1, 'hours')
    this.state = {
      to: date.format('h:mm'),
      from: prevDate.format('h:mm'),
      startDate: moment(),
      reset: {
        to: date.format('h:mm'),
        from: prevDate.format('h:mm'),
      },
    }
  }

  changeTime (type, event) {
    const { value } = event.target
    this.setState({
      [type]: value,
    })
  }

  blurTime (type, event) {
    const date = moment(new Date())
    let words = this.state[type].replace(/\D/g,'')
    const { length } = words
    const factor = length === 4 ? 2 : 1
    const hours = words.substring(0, factor)
    const minutes = words.substring(factor, length)
    const isValid = length < 5 && length > 2 && hours < 25 && minutes < 60
    const time = `${date.format('YYYY-MM-DD')} ${hours}:${minutes}:00.000`
    if (!isValid || !moment(time).isValid()) {
      this.setState({
        [type]: this.state.reset[type],
      })
    } else {
      this.setState({
        [type]: `${hours}:${minutes}`,
      })
    }
  }

  handleDateChange = (startDate) => {
    this.setState({
      startDate,
    })
  }

  renderDropdown(name, options = [], defaultText = 'Select...') {
    return (
      <select name={name} className="home-dropdown">
        {options.map(item => (<option value={item}>{item}</option>))}
      </select>
    )
  }

  renderTimeline () {
    return (
      <div className="home-timeline">
        <div className="home-timeline-block">
          <div className="home-timeline-time">
            2:33 - 3:44
            <div>1:00:00</div>
          </div>
          <div classname="home-timeline-className">
            Class A
          </div>
        </div>
        <div className="home-timeline-block">
          <div className="home-timeline-time">
            2:33 - 3:44
            <div>1:00:00</div>
          </div>
          <div classname="home-timeline-className">
            Class A
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
            {classes.map((item) => (<div className="home-filter">{item.name}</div>))}
          </div>
          <div className="home-timeline-container">
            <h3 className="ui dividing header home-header">Timeline</h3>
            {this.renderTimeline()}
          </div>
        </div>
      </div>
    )
  }

	render () {
    const { classes } = this.props
    const { from, to, startDate } = this.state
		return (
      <div>
        <div className="home-container">
          <div className="home-text">
            <span>
              I was at
            </span>
            {this.renderDropdown('class', classes.map((item) => item.name), 'class')}
            <span>
              from
            </span>
            <input
              type="text"
              onBlur={(e) => this.blurTime('from', e)}
              onChange={(e) => this.changeTime('from', e)}
              value={from}
              placeholder="XX:XX" />
            <span>
              to
            </span>
            <input
              type="text"
              onBlur={(e) => this.blurTime('to', e)}
              onChange={(e) => this.changeTime('to', e)}
              value={to}
              placeholder="XX:XX" />
            <span>
              on
            </span>
            <DatePicker
              selected={startDate}
              onChange={this.handleDateChange} />
          </div>
          <Button className="big ui button home-button">
            Submit Time
          </Button>
        </div>
        {this.renderBottom()}
      </div>
		)
	}
}

const mapStateToProps = (state) => ({
  ...state
})
export default connect(mapStateToProps)(Home)
