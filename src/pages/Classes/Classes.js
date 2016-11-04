import React, { Component, PropTypes } from 'react'
import { Container, Header } from 'semantic-ui-react'

import Class from '../../components/Class'

export default class Classes extends Component {
  static classData = [
    {
      semester: 'Fall 2016',
      classes: [
        {
          classTitle: 'Class A',
          time: '12:12',
        },
        {
          classTitle: 'Class B',
          time: '12:12',
        },
        {
          classTitle: 'Class C',
          time: '12:12',
        },
      ],
    },
    {
      semester: 'Spring 2016',
      classes: [
        {
          classTitle: 'Class A',
          time: '12:12',
        },
        {
          classTitle: 'Class B',
          time: '12:12',
        },
        {
          classTitle: 'Class C',
          time: '12:12',
        },
      ],
    },
  ]
  render () {
    return (
      <Container>
        {
          Classes.classData.map(semester => (
            <div className='margin-bottom'>
              <Header dividing as='h2'>
                {semester.semester}
              </Header>
              {
                semester.classes.map(({time, classTitle}) => (<Class time={time} classTitle={classTitle} />))
              }
            </div>
          ))}
      </Container>
    )
  }
}
