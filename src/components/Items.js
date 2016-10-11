import React, { Component, PropTypes } from 'react'

class Items extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    const { children } = this.props
    return (
      <div className="ui items">
        {children}
      </div>
    )
  }
}

export default Items
