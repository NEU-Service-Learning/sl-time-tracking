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
            hours: '12',
            minutes: '12',
          },
          {
            classTitle: 'Class B',
            hours: '12',
            minutes: '12',
          },
          {
            classTitle: 'Class C',
            hours: '12',
            minutes: '12',
          },
        ],
      },
      {
        semester: 'Spring 2016',
        classes: [
          {
            classTitle: 'Class A',
            hours: '12',
            minutes: '12',
          },
          {
            classTitle: 'Class B',
            hours: '12',
            minutes: '12',
          },
          {
            classTitle: 'Class C',
            hours: '12',
            minutes: '12',
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
                <Header dividing as='h3'>
                  {semester.semester}
                </Header>
                {
                  semester.classes.map(({hours, minutes, classTitle}) => (<Class hours={hours} minutes={minutes} classTitle={classTitle} />))
                }
              </div>
            ))}
        </Container>
      )
    }
  }
