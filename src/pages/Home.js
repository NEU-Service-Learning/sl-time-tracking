import React, { Component } from 'react'

import Content from '../components/Content'
import Items from '../components/Items'
import Map from '../components/Map'
import Button from '../components/Button'
import Modal from '../components/Modal'
import StudentForm from '../components/StudentForm'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        lat: 42.33902090000001,
        lng: -71.0878994,
      },
      isModalVisble: false,
    }
  }
  renderFeed() {
    return (
      <div>
        <h4 className="ui sub header">Activity Feed</h4>
        <div className="ui feed">
          <div className="event">
            <div className="label">
              <img alt="avatar" src="http://semantic-ui.com/images/avatar/small/jenny.jpg" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
              </div>
              <div className="summary">
                 <a>Jenny Hess</a> checked into Calculus 1.
              </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img alt="avatar" src="http://semantic-ui.com/images/avatar/small/elliot.jpg" />
            </div>
            <div className="content">
              <div className="date">
                4 days ago
              </div>
              <div className="summary">
                 You added <a>Burak Aslan</a> created an account.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderItem() {
    return (
      <div className="item">
        <div className="image">
          <img alt="avatar" src="http://semantic-ui.com/images/wireframe/image.png" />
        </div>
        <div className="content">
          <a className="header">Header</a>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo sem. Integer sed bibendum dui. Quisque at mattis ipsum. Suspendisse faucibus, lorem scelerisque semper sollicitudin, mauris justo aliquam nunc, sit amet laoreet dui sem non orci. Integer ut rhoncus magna. Aenean elit nisi, placerat eu orci eu, pretium convallis sapien.
            </p>
          </div>
          <div className="extra">
            Additional Details
          </div>
        </div>
      </div>
    )
  }
	render () {
    const { location } = this.state
		return (
			<div className="ui container">
        <Modal isVisible={this.state.isModalVisble} approveOnClick={() => {this.setState({isModalVisble: false})}} cancelOnClick={() => {this.setState({isModalVisble: false})}} header='Enter Hours'>
          <StudentForm></StudentForm>
        </Modal>
				<div className="ui three column stackable grid">
          <div className="sixteen wide column">
          <Button className='ui button fluid' onClick={() => {this.setState({isModalVisble: true})}}>
            <i className="add to calendar icon"/>
            Enter Hours
          </Button>
          <Button className='ui button fluid'>
            <i className="calendar icon"/>
            View Hours
          </Button>
          </div>
				</div>
			</div>
		)
	}
}

export default Home
