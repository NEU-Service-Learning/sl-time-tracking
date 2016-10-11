import React, { Component, PropTypes } from 'react'

class Content extends Component {
  static propTypes = {
    children: PropTypes.any,
    extraChildren: PropTypes.any,
  }
  render() {
    const { children, extraChildren } = this.props
    return (
      <div className="ui card">
        <div className="content">
          {children}
        </div>
        { extraChildren ? (<div className="extra content">
            {extraChildren}
          </div> ) : null }
      </div>
    )
  }
}

export default Content
