import React, { Component, PropTypes } from 'react'

export default class TimeInput extends Component {
  static propTypes = {
    hours: PropTypes.string,
    minutes: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    spanClassName: PropTypes.string,
  }

  handleOnChange = (type, e) => {
    const { onChange, hours, minutes } = this.props
    const { value } = e.target
    if (type === 'hours' && parseInt(value, 10) < 13 && parseInt(value, 10) >= 0) {
      onChange({ hours: value, minutes })
    } else if (parseInt(value, 10) < 60 && parseInt(value, 10) >= 0) {
      onChange({ hours, minutes: value })
    }

    if (!value) {
      onChange({ hours, minutes, [type]: '' })
    }
  }

  render () {
    const { spanClassName, className, value, hours, minutes } = this.props
    return (
      <div className={className ? className : 'inline-block'}>
        <input name="hours" placeholder="XX" value={hours} type="number" onChange={(e) => this.handleOnChange('hours', e)} />
        <span className={spanClassName} style={{ padding: '0 4px' }}>:</span>
        <input name="minutes" placeholder="XX" value={minutes} type="number" onChange={(e) => this.handleOnChange('minutes', e)} />
      </div>
    )
  }
}
