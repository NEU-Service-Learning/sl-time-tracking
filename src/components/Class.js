import React, { Component, PropTypes } from 'react'
import { Icon, Header } from 'semantic-ui-react'

import './Class.css'

export default class Class extends Component {
  static propTypes = {
    hours: PropTypes.string,
    minutes: PropTypes.string,
    classTitle: PropTypes.string,
  }
  render () {
    const { hours, minutes, classTitle } = this.props
    if (!classTitle) {
      return null
    }
    return (
      <div className='class-container'>
        <div className='class-left'>
          <div className='class-title'>
            Total Time
          </div>
          <div className='class-time'>
            {hours} hours {minutes} minutes
          </div>
        </div>
        <Header className='class-middle' as='h3'>
         {classTitle}
        </Header>
        <div className='class-left'>
          <Icon size="big" name='ellipsis vertical' />
        </div>
      </div>
    )
  }
}
