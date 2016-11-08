import React, { Component, PropTypes } from 'react'
import { Icon, Container, Checkbox, Button, Header, Form } from 'semantic-ui-react'

export default class Settings extends Component {
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
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
