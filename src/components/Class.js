import React, { Component, PropTypes } from 'react'
import { Icon, Header } from 'semantic-ui-react'

import './Class.css'

export default class Class extends Component {
  static propTypes = {
    time: PropTypes.string,
    classTitle: PropTypes.string,
  }
  render () {
    const { time, classTitle } = this.props
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
            {time}
          </div>
        </div>
        <Header className='class-middle' as='h3'>
         {classTitle}
        </Header>
        <div className='class-left'>
          <Icon name='trash outline' />
        </div>
      </div>
    )
  }
}
