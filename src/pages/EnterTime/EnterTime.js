import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { Form, TextArea, Input, Dimmer, Loader, Header, Divider, Card, Image, Dropdown, Segment, Checkbox, Message} from 'semantic-ui-react'

import { STUDENT_EDIT_TIME } from '../../redux/actions/action-types'
import TimeInput from '../../components/TimeInput'
import { getCourses } from '../../redux/actions/courses'
import { addRecord } from '../../redux/actions/record'
import { getEnrollmentsForCourse } from '../../redux/actions/enrollments'
import { getProjects, getStudentsOnProject } from '../../redux/actions/projects'


class EnterTime extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    record: PropTypes.object,
    error: PropTypes.object,
    time: PropTypes.object,
    success: PropTypes.bool,
    dispatch: PropTypes.func,
    user: PropTypes.object,
    projects: PropTypes.object,
  }

  static courseToProjects = {
    'CS 4500': [{'value': 'direct', 'text': 'Service Learning'},
      {'value': 'direct', 'text': 'Good For Society'},
      {'value': 'direct', 'text': 'Help Save Kids'}],
    'PT 1234': [{'value': 'direct', 'text': 'Train Athletes to Win'},
        {'value': 'direct', 'text': 'Soup Kitchen'},
        {'value': 'direct', 'text': 'God is Good'}],
  }

  constructor (props) {
    super(props)
    this.state = {
      warning: '',
      loadingLocation: false,
      defaultServiceTypes: [{ value: 'TO', text: 'Trainings & Orientations' }, { value: 'DS', text: 'Direct Service' }, { value: 'IR', text: 'Individual Research & Planning' }, { value: 'TR', text: 'Team Research & Planning' }],
      defaultProjectTypes: [{'value': 'direct', 'text': 'Project A'}, {'value': 'group', 'text': 'Project B'}, {'value': 'individual', 'text': 'Project C'}],
    }
  }

  componentWillMount () {
    const { dispatch, selected, time, user } = this.props
    const { selectedProject, selectedCourse } = time
    dispatch(getProjects())
    dispatch({ type: 'STUDENT_RESET_SUCCESS' })
    if (selectedCourse) dispatch(getEnrollmentsForCourse(selectedCourse))
    if (selectedProject) dispatch(getStudentsOnProject(selectedProject))
    dispatch({ type: 'NAVBAR_ALT' })
  }

  componentWillReceiveProps (props) {
    const { time, dispatch, projects } = props
    const { start, end, selectedProject } = time
    if (start.period === 'am' && end.period === 'pm') {
      this.setState({ warning: 'You have invalid times'})
    } else {
      this.setState({ warning: '' })
    }
  }

  handleStartChange (type, val) {
    const { dispatch } = this.props
    dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { [type] : val }}})
  }

  handleEndChange (type, val) {
    const { dispatch } = this.props
    dispatch({ type: STUDENT_EDIT_TIME, payload: { end: { [type] : val }}})
  }

  submitRecord = (record, { latitude, longitude }) => {
    const { dispatch } = this.props
    this.setState({ loadingLocation: false })
    dispatch(addRecord({ ...record, latitude: latitude.toFixed(6), longitude: longitude.toFixed(6) }))
  }

  addRecord = () => {
    const { dispatch, time } = this.props
    const record = {
      project: time.selectedProject,
      date: moment(time.start.date).format('YYYY-DD-MM'),
      start_time: `${time.start.hours}:${time.start.minutes}`,
      total_hours: time.hours,
      longitude: 40,
      enrollment: parseInt(time.selectedEnrollment),
      latitude: 40,
      comments: time.comments,
      category: time.selectedType,
    }
    this.setState({ loadingLocation: true }, () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(({ coords }) => this.submitRecord(record, coords))
      } else {
        this.submitRecord(record)
        this.setState({ loadingLocation: false})
      }
    })
  }

  editHours = (hours) => {
    const { dispatch } = this.props
    if (hours > 0) {
      dispatch({ type: STUDENT_EDIT_TIME, payload: { hours }})
    }
  }

  render () {
    const { warning, defaultServiceTypes, defaultProjectTypes } = this.state
    const { time, dispatch, projects, record, success, user } = this.props
    const { enrollments } = user
    const { error } = record
    console.log(error, success);
    const { start, end, selectedService, selectedProject, selectedCourse, selectedEnrollment } = time
    return (
      <div>
      <Dimmer active={projects.loading}>
        <Loader />
      </Dimmer>
      <Dimmer active={this.state.loadingLocation}>
        <Loader>Getting your location</Loader>
      </Dimmer>
      <Dimmer active={record.loading}>
        <Loader>Submitting record</Loader>
      </Dimmer>
      <div className="ui container">
        <div className="ui one column centered grid">
          <div className="column">
            <Message hidden={!success} positive>
              <Message.Header>Record has been added!</Message.Header>
            </Message>
            <Header dividing as="h4">
              <Header.Content>
                Entering Time
              </Header.Content>
            </Header>
            <Form error={error !== {}} onSubmit={(e) => e.preventDefault()}>
              <Form.Field>
                <Form.Dropdown label='Type of Servive' onChange={(e, val) => dispatch({ type: STUDENT_EDIT_TIME, payload: { selectedType: val.value }})} defaultValue={selectedService} placeholder='Select Type of Service' fluid selection options={defaultServiceTypes} />
              </Form.Field>
              <Message
                error
                hidden={!error || !error.category}
                header="Error"
                content={error.category ? error.category[0] : ''}
              />
              <Form.Group widths="3">
                <Form.Field>
                  <Form.Dropdown label='Course' onChange={(e, val) => {
                      dispatch({ type: STUDENT_EDIT_TIME, payload: { selectedEnrollment: val.value }})
                    }} defaultValue={selectedEnrollment} placeholder='Select Course' fluid selection options={Object.keys(enrollments).map(key => ({ value: enrollments[key].id, text: enrollments[key].course }))} />
                </Form.Field>
                <Form.Field>
                  <Form.Dropdown label='Project' onChange={(e, val) => {
                      dispatch({ type: STUDENT_EDIT_TIME, payload: { selectedProject: val.value }})
                    }} defaultValue={selectedProject} placeholder='Select Project' fluid selection options={projects.projects.map(({ id, name }) => ({ value: id, text: name }))} />
                </Form.Field>
                <Form.Field>
                  <Form.Input label='Hours' value={time.hours} onChange={(e, val) => this.editHours(e.target.value)}  fluid type='number'/>
                </Form.Field>
              </Form.Group>
              <Message
                error
                hidden={!error || !error.enrollment}
                header="Enrollment Error"
                content={error.enrollment ? error.enrollment[0] : ''}
              />
              <Message
                error
                hidden={!error || !error.project}
                header="Project Error"
                content={error.project ? error.project[0] : ''}
              />
              <Message
                error
                hidden={!error || !error.total_hours}
                header="Total Hours Error"
                content={error.total_hours ? error.total_hours[0] : ''}
              />
              <br/>
              <div className="three fields">
                <div className="field">
                  <label>Start Time</label>
                    <TimeInput
                      className="two fields input-left-fix"
                      spanClassName="vertical-center"
                      hours={start.hours}
                      minutes={start.minutes}
                      onChange={(data) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, ...data }}})}
                    />
                </div>
                <div className="field">
                 <label>    ‌ ‍ ‎ ‏</label>
                   <select
                     defaultValue={start.period} onChange={(period) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, period }}})}
                     className="ui dropdown"
                   >
                     <option value="am">AM</option>
                     <option value="pm">PM</option>
                   </select>
                </div>
                <div className="field">
                  <label>    ‌ ‍ ‎ </label>
                  <DatePicker
                    selected={start.date}
                    onChange={(date) => dispatch({ type: STUDENT_EDIT_TIME, payload: { start: { ...start, date }}})}
                    />
                </div>
              </div>
              <div className="field">
                <label>Comments</label>
                <TextArea placeholder='Additional Comments' rows='4' onChange={(e) => dispatch({ type: STUDENT_EDIT_TIME, payload: { comments: e.target.value }})}/>
              </div>
              <Header dividing as="h4">
                <Header.Content>
                  Additional Group Members
                  <Header.Subheader>
                    Anyone else who served
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Loader inline active={projects.studentsLoading}/>
              {projects.students.map(student => (<div style={{paddingBottom: '1rem'}}><Checkbox label={student.first_name  + ' ' + student.last_name} /></div>))}
              {projects.students.length === 0 ? (<Message>No other students on this project</Message>) : null}
              {
                warning ?
                <div className="ui warning message">
                  <ul className="list">
                    <p>{warning}</p>
                  </ul>
                </div> : null
              }
              <Divider />
              <button onClick={() => dispatch(push('/'))} className="ui left floated button" type="submit">
                Back
              </button>
              <button onClick={this.addRecord} className="ui animated fade right floated button" type="submit">
                <div className="visible content">Submit Time</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.student, projects: state.projects, user: state.auth.user })

export default connect(mapStateToProps)(EnterTime)
