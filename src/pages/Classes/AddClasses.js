import React, { Component, PropTypes } from 'react'
import { Container, Header, Divider, Dropdown } from 'semantic-ui-react'

import Class from '../../components/Class'

export default class AddClasses extends Component {
  static courseToProjects = {
    'CS 4500': [{'value': 'direct0', 'text': 'Service Learning'},
      {'value': 'direct1', 'text': 'Good For Society'},
      {'value': 'direct2', 'text': 'Help Save Kids'}],
    'PT 1234': [{'value': 'direct0', 'text': 'Train Athletes to Win'},
        {'value': 'direct1', 'text': 'Soup Kitchen'},
        {'value': 'direct2', 'text': 'God is Good'}],
  }

  static defaultCourses = [
    {'value': 'direct', 'text': 'CS 4500: Software Development'},
    {'value': 'group', 'text': 'CS 4800: Really Hard Class'},
    {'value': 'individual', 'text': 'PT 1234: Physical Therapy Introduction'},
    {'value': 'training', 'text': 'SOCL 1337: Love Society'},
    {'value': 'training1', 'text': 'ENGW 5555: Write Love Poems'}
  ]
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
  ]
  render () {
    return (
      <Container>
      <div className="ui grid container outer-container">
        <div className="eight wide column">
        <div className='ui form'>
          <Header dividing as="h4">
            <Header.Content>
              Register for Courses and Projects for Fall 2016
            </Header.Content>
          </Header>
          <div className="field">
            <label>Course</label>
            <Dropdown placeholder='Select Class' fluid search selection options={AddClasses.defaultCourses} />
          </div>
          <div className="field">
            <label>Project</label>
            <Dropdown placeholder='Select Project for Class' fluid search selection options={AddClasses.courseToProjects['CS 4500']} />
          </div>
        </div>

      <Divider />
      <button className="ui animated fluid fade right floated button" type="submit">
        <div className="visible content">Register</div>
        <div className="hidden content">
          <i className="right arrow icon"></i>
        </div>
      </button>
      </div>
      <div className = 'eight wide column'>
      <Header dividing as="h4">
        <Header.Content>
          Your Classes and Projects for Fall 2016
        </Header.Content>
      </Header>
      {
        AddClasses.classData.map(semester => (
          <div className='margin-bottom'>
            {
              semester.classes.map(({hours, minutes, classTitle}) => (<Class hours={hours} minutes={minutes} classTitle={classTitle} />))
            }
          </div>
        ))}
        </div>
        </div>
      </Container>
    )
  }
}
