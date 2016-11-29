import React, { Component, PropTypes } from 'react'
import { Segment, Image, List, Icon, Container, Checkbox, Button, Header, Form } from 'semantic-ui-react'

export default class Settings extends Component {

  renderFriends() {
    return (
      <Segment>
      <List divided verticalAlign='middle'>
        <List.Item>
          <Image avatar src='http://semantic-ui.com/images/avatar2/small/lena.png' />
          <List.Content verticalAlign='middle'>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src='http://semantic-ui.com/images/avatar2/small/lindsay.png' />
          <List.Content verticalAlign='middle'>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src='http://semantic-ui.com/images/avatar2/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src='http://semantic-ui.com/images/avatar2/small/molly.png' />
          <List.Content verticalAlign='middle'>
            Molly
          </List.Content>
        </List.Item>
      </List>
      </Segment>
    )
  }
  render () {
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
            <Checkbox label="Keep me logged in" toggle />
          </Form.Field>
          <Form.Field>
            <label>Teammates</label>
            {this.renderFriends()}
          </Form.Field>
          <Button type='submit'>Save Changes</Button>
        </Form>
      </Container>
    )
  }
}
