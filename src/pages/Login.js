import React, { Component } from 'react'
import Button from '../components/Button'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
  }

  handleSubmit(event) {
    alert("Email is: " + this.state.email);
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value, password : this.state.password})
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value, email : this.state.email})
  }
  render () {
    return (
      <div className="ui container">
        <div className="ui column stackable centered grid">

        <form className="ui six wide column form">
          <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="smith.j@husky.neu.edu"
                       value={this.state.email} onChange={this.handleChangeEmail}></input>
            </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password"
                       value={this.state.password} onChange={this.handleChangePassword}></input>
              </div>
              <Button onClick={this.handleSubmit}>Login</Button>
        </form>
        </div>

      </div>
    )
  }
}

export default Login
