import React, { Component, PropTypes } from 'react'
import { Container, Form, Segment, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getCourses, getCourseSections } from '../../redux/actions/courses'
import { getProjects } from '../../redux/actions/projects'
import Class from '../../components/Class'

class Classes extends Component {
  static propTypes = {
    courses: PropTypes.object,
    projects: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.state = {
      course: '',
      section: '',
      semester: '',
      project: '',
    }
  }
  componentWillMount() {
    const { courses, dispatch } = this.props
    dispatch(getCourses())
    dispatch(getProjects())
  }
  handleChange = (e, val) => {
    this.setState({ course: val.value })
    this.props.dispatch(getCourseSections(val.value))
  }
  render() {
    const { course, semester, section, project } = this.state
    const { courses, projects } = this.props
    return (
      <Container>
        <Header>
          Enroll in section
        </Header>
        <Segment>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Field>
              <Form.Select onChange={this.handleChange} options={courses.courses.map(item => ({ value: item.id, text: item.name }))} label='Course' defaultValue={course} />
            </Form.Field>
            <Form.Field>
              <Form.Select options={projects.projects.map(item => ({ value: item.id, text: item.description }))} label='Projects' defaultValue={project} />
            </Form.Field>
            <Form.Field>
              <Form.Select disabled={!course} options={courses.sections.map(item => ({ value: item.crn, text: item.professor }))} label='Sections' defaultValue={section} />
            </Form.Field>
            <Form.Field>
              <Form.Input defaultValue={semester} label='Semester' />
            </Form.Field>
            <Button type='submit'>Enroll</Button>
          </Form>
        </Segment>
     </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses,
  projects: state.projects,
})

export default connect(mapStateToProps)(Classes)
