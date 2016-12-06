import React, { Component, PropTypes } from 'react'
import { Message, Container, Form, Segment, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getCourses, getCourseSections } from '../../redux/actions/courses'
import { addEnrollment } from '../../redux/actions/enrollments'
import { getProjects } from '../../redux/actions/projects'
import Class from '../../components/Class'

class Classes extends Component {
  static propTypes = {
    courses: PropTypes.object,
    projects: PropTypes.object,
    user: PropTypes.object,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.object,
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
  handleAddEnrollment = (e, val) => {
    e.preventDefault()
    const { dispatch, user, courses } = this.props
    const { course, semester, section, project } = this.state
    const sec = courses.sections[section.value]
    const enrollment = {
      "user": user.id,
      "course": val.course_id,
      "semester": val.semester_name,
      "meeting_days": sec.meeting_days,
      "meeting_start_time": sec.meeting_end_time,
      "meeting_end_time": sec.meeting_end_time,
      "project": project,
      "crn": sec.crn,
      "is_active": val.is_active
    }
    dispatch(addEnrollment(enrollment))

  }
  render() {
    const { course, semester, section, project } = this.state
    const { courses, projects, error, loading, success } = this.props
    return (
      <Container>
        <Header>
          Enroll in section
        </Header>
        <Segment>
          <Message hidden={!success} positive>
            <Message.Header>Enrollment has been added!</Message.Header>
          </Message>
          <Form loading={loading} error={error !== {}} onSubmit={this.handleAddEnrollment}>
            <Form.Field>
              <Form.Select name='course_id' onChange={this.handleChange} options={courses.courses.map(item => ({ value: item.id, text: item.name }))} label='Course' defaultValue={course} />
            </Form.Field>
            <Message
              error
              hidden={!error || !error.course}
              header="Error"
              content={error.course ? error.course[0] : ''}
            />
            <Form.Field>
              <Form.Select name='project' options={projects.projects.map(item => ({ value: item.id, text: item.description }))} label='Projects' defaultValue={project} />
            </Form.Field>
            <Message
              error
              hidden={!error || !error.project}
              header="Error"
              content={error.project ? error.project[0] : ''}
            />
            <Form.Field>
              <Form.Select name='section' onChange={(e, val) => this.setState({ section: val })} disabled={!course} options={courses.sections.map((item, key) => ({ value: key, text: item.professor }))} label='Sections' defaultValue={section} />
            </Form.Field>
            <Message
              error
              hidden={!error || !error.meeting_days}
              header="Error"
              content={error.meeting_days ? error.meeting_days[0] : ''}
            />
            <Message
              error
              hidden={!error || !error.meeting_end_time}
              header="Error"
              content={error.meeting_end_time ? error.meeting_end_time[0] : ''}
            />
            <Message
              error
              hidden={!error || !error.meeting_start_time}
              header="Error"
              content={error.meeting_start_time ? error.meeting_start_time[0] : ''}
            />
            <Form.Field>
              <Form.Select label='Semester' name='semester_name' defaultValue={semester} options={[{ text: 'Fall 2016', value: 'FALL2016' }]} />
            </Form.Field>
            <Message
              error
              hidden={!error || !error.semester}
              header="Error"
              content={error.semester ? error.semester[0] : ''}
            />
            <Form.Group>
              <label>Is the enrollment active?</label>
              <Form.Field name='is_active' label='Is Active' control='input' type='checkbox' />
            </Form.Group>
            <Message
              error
              hidden={!error || !error.is_active}
              header="Error"
              content={error.is_active ? error.is_active[0] : ''}
            />
            <Message
              error
              hidden={!error || !error.user}
              header="Error"
              content={error.user ? error.user[0] : ''}
            />
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
  user: state.auth.user,
  success: state.projects.enrollmentsSuccess,
  loading: state.projects.enrollmentsLoading,
  error: state.projects.enrollmentsError,
})

export default connect(mapStateToProps)(Classes)
