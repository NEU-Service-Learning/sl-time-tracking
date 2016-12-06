import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Menu, Message, Loader, Dimmer, Button, Segment, Input, Form, Container } from 'semantic-ui-react'
import { push } from 'react-router-redux'

import { loginUser, registerUser } from '../../redux/actions/auth'


class Login extends Component {
  static PropTypes = {
    loggedIn: PropTypes.bool,
    admin: PropTypes.bool,
    loading: PropTypes.bool,
    token: PropTypes.string,
    error: PropTypes.object,
  }
  constructor (props) {
    super(props)
    this.state = { activeItem: 'login' }
  }
  componentWillMount() {
    const token = localStorage.getItem('key')
    if (token && token !== '') {
      this.props.dispatch(push('/'))
    }
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  handleLogin = (e, form) => {
    e.preventDefault()
    const { activeItem } = this.state
    if (activeItem === 'login' && form.password && form.username) {
      this.props.dispatch(loginUser(form))
    } else {
      const { password1, password2, username, first_name, last_name } = form
      if (password1 && password2 && username && first_name && last_name && password1 === password2) {
        this.props.dispatch(registerUser(form))
      }
    }

  }
  render () {
    const { loading, error } = this.props
    const { activeItem } = this.state
    return (
      <div>
        <div style={{ paddingTop: '10rem' }}>
          <div style={{ height: '100%' }} className="ui middle aligned center aligned grid">
            <div style={{maxWidth: '450px'}} className="column">
              <h2 className="ui purple image header">
                <div className="content">
                  Service-Learning Time Tracker
                </div>
              </h2>
              <Form style={{textAlign: 'left'}} loading={loading} error={error !== {}} onSubmit={this.handleLogin}>
                <Segment>
                  <Menu pointing secondary>
                    <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
                    <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}/>
                  </Menu>
                  <Form.Field>
                    <Form.Input label='Email' type='email' icon='user' name='username' placeholder='Email'/>
                    <Message
                      error
                      hidden={!error || !error.username}
                      header="Email Error"
                      content={error.username ? error.username.shift() : ''}
                    />
                  </Form.Field >

                  { activeItem === 'login' ?
                    <Form.Field >
                      <Form.Input label='Password' type='password' icon='lock' name='password' placeholder='Password'/>
                      <Message
                        error
                        hidden={!error || !error.password}
                        header="Password Error"
                        content={error.password ? error.password.shift() : ''}
                      />
                    </Form.Field>
                    :
                    [<Form.Field key='first'>
                      <Form.Input label='First Name' type='text' name='first_name' placeholder='First Name'/>
                      <Message
                        error
                        hidden={!error || !error.first_name}
                        header="First Name Error"
                        content={error.first_name ? error.first_name.shift() : ''}
                      />
                    </Form.Field>,
                    <Form.Field key='last'>
                      <Form.Input label='Last Name' type='text' name='last_name' placeholder='Last Name'/>
                      <Message
                        error
                        hidden={!error || !error.last_name}
                        header="Last Name Error"
                        content={error.last_name ? error.last_name.shift() : ''}
                      />
                    </Form.Field>,
                    <Form.Field key='pass'>
                      <Form.Input label='Password' type='password' icon='lock' name='password1' placeholder='Password'/>
                      <Message
                        error
                        hidden={!error || !error.password1}
                        header="Password Error"
                        content={error.password1 ? error.password1.shift() : ''}
                      />
                    </Form.Field>,
                    <Form.Field key='pass2'>
                      <Form.Input label='Confirm Password' type='password' icon='lock' name='password2' placeholder='Confirm Password'/>
                      <Message
                        error
                        hidden={!error || !error.password2}
                        header="Confirm Password Error"
                        content={error.password2 ? error.password2.shift() : ''}
                      />
                    </Form.Field>]
                  }
                </Segment>
                <Message
                  error
                  hidden={!error || !error.non_field_errors}
                  header="Error"
                  content={error.non_field_errors ? error.non_field_errors.shift() : ''}
                />
                <Button size='large' color='purple' fluid type='submit'>Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.auth})

export default connect(mapStateToProps)(Login)
