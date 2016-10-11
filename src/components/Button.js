import React, { Component, PropTypes } from 'react'

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }
  render() {
    const { className, label, onClick, children } = this.props
    return (
      <button className={className ? className : 'ui button'} onClick={onClick}>
        {label ? label : children}
      </button>
    )
  }
}

export default Button
