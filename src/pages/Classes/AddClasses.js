import React, { Component, PropTypes } from 'react'
import { Container, Header, Divider, Dropdown } from 'semantic-ui-react'

export default class AddClasses extends Component {
  static courseToProjects = {
    'CS 4500': [{'value': 'direct', 'text': 'Service Learning'},
      {'value': 'direct', 'text': 'Good For Society'},
      {'value': 'direct', 'text': 'Help Save Kids'}],
    'PT 1234': [{'value': 'direct', 'text': 'Train Athletes to Win'},
        {'value': 'direct', 'text': 'Soup Kitchen'},
        {'value': 'direct', 'text': 'God is Good'}],
  }

  static defaultCourses = [
    {'value': 'direct', 'text': 'CS 4500: Software Development'},
    {'value': 'group', 'text': 'CS 4800: Really Hard Class'},
    {'value': 'individual', 'text': 'PT 1234: Physical Therapy Introduction'},
    {'value': 'training', 'text': 'SOCL 1337: Love Society'},
    {'value': 'training', 'text': 'ENGW 5555: Write Love Poems'}
  ]
  render () {
    return (
      <Container>
      <br/><br/>
      <div className="ui container">
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
      </div>
      <Divider />
      <button className="ui left floated button" type="submit">
        Back
      </button>
      <button className="ui animated fade right floated button" type="submit">
        <div className="visible content">Register</div>
        <div className="hidden content">
          <i className="right arrow icon"></i>
        </div>
      </button>
      </Container>
    )
  }
}
