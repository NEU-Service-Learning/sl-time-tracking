import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Input, Segment, Image, List, Icon, Container, Checkbox, Button, Header, Form } from 'semantic-ui-react'

class Settings extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  render () {
    const { user = {} } = this.props
    const { username, first_name, last_name, enrollments } = user
    return (
      <Container>
        <Header as='h2'>
          <Icon name='settings' />
          <Header.Content>
            Account Settings
            <Header.Subheader>
              Manage your preferences
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <Input value={first_name} placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input value={last_name} placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Input value={username} placeholder='Email' />
          </Form.Field>
          <Button type='submit'>Save Changes</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})
export default connect(mapStateToProps)(Settings)
