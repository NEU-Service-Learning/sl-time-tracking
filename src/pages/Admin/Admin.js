import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Form, Modal, Divider, Icon, Extra, Container, Header, Grid, Content, Button,  Input, Menu, Segment, Card, Group, Item, Image, Description} from 'semantic-ui-react'

class Admin extends Component {
  static propTypes = {
    classes: PropTypes.array,
  }
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'class',
      modal: false,
      modalStudent: false,
    }
  }

  renderStudents() {
    return (
      <Item.Group>
        <Button onClick={() => this.setState({ modalStudent: true })} fluid content='Add Student' basic icon='add user' />
        <Divider hidden />
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Matthew Harris</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button fluid basic >Edit</Button>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header content='Jake Smith' />
              <Card.Meta content='Musicians' />
              <Card.Description content='Jake is a drummer living in New York.' />
            </Card.Content>
            <Card.Content extra>
                <Button fluid basic >Edit</Button>
            </Card.Content>
          </Card>
        </Card.Group>
      </Item.Group>
    )
  }

  renderClasses () {
    const { classes } = this.props
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
                 <Button.Group float='right' basic size='small'>
                    <Button content='Remove' icon='trash outline' />
                    <Button content='Duplicate' icon='clone' />
                 </Button.Group>
               </Item.Extra>
             </Item.Content>
           </Item>
         )) }
      </Item.Group>
    )
  }
  render () {
    const { activeItem } = this.state
    return (
      <Container>
        <Menu attached='top' tabular>
          <Menu.Item name='classes' active={activeItem === 'class'} onClick={() => this.setState({ activeItem: 'class' })} />
          <Menu.Item name='students' active={activeItem === 'student'} onClick={() => this.setState({ activeItem: 'student' })} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: 'true' }} placeholder={`Search ${activeItem}s...`} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          {activeItem === 'class' ? this.renderClasses() : this.renderStudents()}
        </Segment>
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

const mapStateToProps = (state) => ({ ...state.class })

export default connect(mapStateToProps)(Admin)
