import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox, TextArea, Table, Form, Modal, Divider, Icon, Extra, Container, Header, Grid, Content, Button,  Input, Menu, Segment, Card, Group, Item, Image, Description} from 'semantic-ui-react'
import { getUsersInfo } from '../../redux/actions/admin'
import { getProjects,getCP } from '../../redux/actions/projects'
import { getCourses } from '../../redux/actions/courses'
//import ReactDataGrid from 'react-data-grid';
var FixedDataTable = require('fixed-data-table');

var RTable = FixedDataTable.Table;

const columns = [
    { key: 'id', name: 'ID',filterable: true, sortable: true ,width: 40,resizeable :true},
    { key: 'first_name', name: 'First Name' ,filterable: true, sortable: true},
    { key: 'last_name', name: 'Last Name' ,filterable: true, sortable: true},
    { key: 'role', name: 'Role' },
    { key: 'course', name: 'Course' },
    { key: 'semester', name: 'semester' },
    { key: 'cp', name: 'Community Partner' },
    { key: 'enrollment', name: 'Enrollment' }];

class Admin extends Component {
    getInitialState(){

    }

  static propTypes = {
    classes: PropTypes.array,
    users: PropTypes.array,
      projects: PropTypes.object,

  }

  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'class',
      modal: false,
      modalStudent: false,
      selectedClass: false,
      classEditing: true,
      filtertext: "Ram" ,
      filtertag: "courses",
    }
  }
  
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getUsersInfo())
      dispatch(getProjects())
      dispatch(getCourses())

  }


    handleChange = (id) => {

        this.props.dispatch(getCP(id))
    }

    resolveprojectCP(id, pj){

        if (id["0"]){
            return pj[id-1]["community_partner"];
        }
        return "None";

    }
    resolveproject(id, pj){

      if (id["0"]){
          return pj[id-1]["name"];
      }
        return "None";

    }
  renderStudent(user,project){
    const rowGetter = rowNumber => user[rowNumber];
   // console.log(project[0].name);
      var listofstudents= []
      for (var i = 0; i < user.length; i++) {

          var key =user[i];

          if (key[this.state.filtertag].includes(this.state.filtertext)){
              listofstudents.push(
                  <Table.Row>
                    <Table.Cell>
                      {key.id}
                    </Table.Cell>
                    <Table.Cell>{key.first_name}</Table.Cell>
                    <Table.Cell>{key.last_name}</Table.Cell>
                    <Table.Cell textAlign='left'>{key.role}</Table.Cell>
                    <Table.Cell>{key.courses}</Table.Cell>
                    <Table.Cell>{key.sections}</Table.Cell>
                    <Table.Cell>{this.resolveproject(key.projects, project)}</Table.Cell>
                    <Table.Cell>{this.resolveprojectCP(key.projects, project)}</Table.Cell>
                  </Table.Row>
              );
          }
      }
    return (
        <div>
          <div>
            <Input type='text' placeholder='Search...' action>
              <input id="searchqfiltervalue" placeholder={`filter Courses...`} />
              <Button icon onClick={() => this.setState({ filtertext: document.getElementById('searchqfiltervalue').value,filtertag: "courses" })} > <Icon name='world' /></Button>
            </Input>
            <br/><p></p>
          </div>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>ID</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Courses</Table.HeaderCell>
                <Table.HeaderCell>Section</Table.HeaderCell>
                <Table.HeaderCell >ProjectID</Table.HeaderCell>
                <Table.HeaderCell>CommunityPartner</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          <Table.Body>
              {listofstudents}</Table.Body>
          </Table>

        </div>

       );

  }

  renderStudents() {
    const { users } = this.props;
    const { projects } = this.props;

      return (
      <Item.Group>
        <Button onClick={() => this.setState({ modalStudent: true })} fluid content='Add Student' basic icon='add user' />
        <Divider hidden />

        <div>
            {this.renderStudent(users,projects.projects)}


        </div>
      </Item.Group>
    )
  }

  renderTable() {
    const { classEditing } = this.state
    return (
    <div>
      <Header as='h4'>Description</Header>
      {classEditing ? <Form><TextArea style={{ height: '6em', marginBottom: '1em' }} fluid>{this.state.selectedClass.description}</TextArea></Form> : <p>{this.state.selectedClass.description}</p>}
      { this.state.classEditing ?
        <Button.Group size='small' style={{ marginBottom: '1em' }}>
            <Button>Remove Students</Button>
            <Button>Move Students</Button>
        </Button.Group>
        : null
      }
    <Table singleLine>
      <Table.Header>
        <Table.Row>
         {classEditing ? <Table.HeaderCell>Select</Table.HeaderCell> : null}
          <Table.HeaderCell>Student</Table.HeaderCell>
          <Table.HeaderCell>Projects</Table.HeaderCell>
          <Table.HeaderCell>Total Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          {classEditing ? <Table.Cell><Checkbox /></Table.Cell> : null}
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/lena.png' shape='rounded' size='mini' />
              <Header.Content>
                Lena
                <Header.Subheader>lena@husky.neu.edu</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            Time Tracking - Service Learning Program
          </Table.Cell>
          <Table.Cell>
            22
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          {classEditing ? <Table.Cell><Checkbox /></Table.Cell>: null}
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/matthew.png' shape='rounded' size='mini' />
              <Header.Content>
                Matthew
                <Header.Subheader>matthew@husky.neu.edu</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            Time Tracking - Service Learning Program
          </Table.Cell>
          <Table.Cell>
            15
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          {classEditing ? <Table.Cell><Checkbox /></Table.Cell>: null}
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/lindsay.png' shape='rounded' size='mini' />
              <Header.Content>
                Lindsay
                <Header.Subheader>lindsay@husky.neu.edu</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            Time Tracking - Service Learning Program
          </Table.Cell>
          <Table.Cell>
            12
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          {classEditing ? <Table.Cell><Checkbox /></Table.Cell> : null}
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://semantic-ui.com/images/avatar2/small/mark.png' shape='rounded' size='mini' />
              <Header.Content>
                Mark
                <Header.Subheader>mark@husky.neu.edu</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            Time Tracking - Service Learning Program
          </Table.Cell>
          <Table.Cell>
            11
          </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <Button.Group size='small' fluid>
    <Button onClick={() => this.setState({ modalStudent: true })} content='Add Student' icon='add user' />
    <Button content='Add TA' icon='add user' />
    <Button content='Add Project' icon='plus' />
  </Button.Group>
  </div>
  )
  }

  renderClasses () {

    const { classes } = this.props
      const { courses } = this.props;
      console.log(courses)


      var listofcourse= []
      for (var i = 0; i < courses.length; i++) {

          var key =courses[i];

          if (key[this.state.filtertag].includes(this.state.filtertext)){
              listofcourse.push(
                  <Table.Row>
                    <Table.Cell>
                        {key.id}
                    </Table.Cell>
                    <Table.Cell>{key.department}</Table.Cell>
                    <Table.Cell>{key.name}</Table.Cell>

                  </Table.Row>
              );
          }
      }


    //console.log(this.handleChange(16));
      return (
          <Item.Group>
              <Button fluid content='Add Class' basic icon='plus' onClick={() => this.setState({ modal: true })} />
              {classes.map(item => (
                  <Item key={item.name}>
                      <Item.Content>
                          <Header as='h2'>
                              {item.name}
                              <Header.Subheader as='a'>{item.semester}</Header.Subheader>
                          </Header>
                          <Item.Description>{item.description}</Item.Description>
                          <Item.Extra>
                              <Button size='small' onClick={() => this.setState({ selectedClass: item })} content='Class Details' />
                              <Button.Group style={{ float: 'right' }} basic size='small'>
                                  <Button content='Remove' icon='trash outline' />
                                  <Button content='Duplicate' icon='clone' />
                              </Button.Group>
                          </Item.Extra>
                      </Item.Content>
                  </Item>
              )) }
              {listofcourse}
          </Item.Group>
      )

  }
  render () {
    const { activeItem, selectedClass } = this.state
    return (
      <Container>
        <Menu attached='top' tabular>
          <Menu.Item name='classes' active={activeItem === 'class'} onClick={() => this.setState({ activeItem: 'class' })} />
          <Menu.Item name='students' active={activeItem === 'student'} onClick={() => this.setState({ activeItem: 'student' })} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input type='text' placeholder='Search...' action>
                <input id="searchfiltervalue" placeholder={`Search ${activeItem}s...`} />
                <Button icon onClick={() => this.setState({ filtertext: document.getElementById('searchfiltervalue').value,filtertag: "first_name" })} > <Icon name='world' /></Button>
              </Input>
            </Menu.Item>
            <Menu.Item style={{ paddingRight: 0 }}>
              <Button >Export CSV</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          {activeItem === 'class' ? this.renderClasses() : this.renderStudents()}
        </Segment>
        <Modal
          dimmer='blurring'
          open={selectedClass}
          onClose={() => this.setState({ selectedClass: false })}
          size='medium'
        >
        <Modal.Header>
          <Header as='h2'>
            {selectedClass.name}
            <Header.Subheader as='a'>{selectedClass.semester}</Header.Subheader>
          </Header>
        </Modal.Header>
          <Modal.Content>
            {this.renderTable()}
          </Modal.Content>
          <Modal.Actions>
            {this.state.classEditing ?
              <Button onClick={() => this.setState({ classEditing: false, selectedClass: false })}>
                <Icon name='checkmark' /> Save Changes
              </Button>
            : <Button onClick={() => this.setState({ classEditing: true })}>
                Edit
              </Button>
            }
          </Modal.Actions>
        </Modal>
        <Modal
          dimmer='blurring'
          open={this.state.modal}
          onClose={() => this.setState({ modal: false })}
          size='small'
        >
          <Header content='Add Class' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Class Name</label>
                <input placeholder='Class Name' />
              </Form.Field>
              <Form.Field>
                <label>Semester</label>
                <input placeholder='Semester' />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input placeholder='Description' />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Submit
            </Button>
          </Modal.Actions>
        </Modal>
        <Modal
          dimmer='blurring'
          open={this.state.modalStudent}
          onClose={() => this.setState({ modalStudent: false })}
          size='small'
        >
          <Header content='Add Student' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Submit
            </Button>
          </Modal.Actions>
        </Modal>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
	return {
	  classes: state.class.classes,
	  users: state.admin.users,
        projects: state.projects,
        courses: state.courses.courses,
	}
}

export default connect(mapStateToProps)(Admin)
