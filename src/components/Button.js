import React, { Component, PropTypes } from 'react'

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }
  render() {
    const { className, label, onClick } = this.props
    return (
      <button className={`ui button ${className}`} onClick={onClick}>
        {label}
      </button>
    )
  }
}

export default Button
