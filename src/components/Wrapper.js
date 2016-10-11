import React, { Component } from 'react'

import Button from './Button'
import Sidebar from './Sidebar'

class Wrapper extends Component {
  static MenuItems = [
    {
      label: 'Time Tracker',
      icon: 'hourglass half icon',
      onClick: () => {},
      active: true,
    },
    {
      label: 'Settings',
      icon: 'setting icon',
      onClick: () => {},
      active: false,
    },
    {
      label: 'Help',
      icon: 'life ring icon',
      onClick: () => {},
      active: false,
    }
  ]

	renderNavbar() {
		return (
			<div style={{ padding: '2rem 0' }} className="ui container">
				<div className="ui secondary menu">
          <div className="left menu">
            <h2 style={{ fontWeight: 300, alignSelf: 'center'}}>Service Learning</h2>
				  </div>
				  <div className="right menu">
		        <Button>
              Login
            </Button>
				  </div>
				</div>
			</div>
		)
	}

	render () {
		const { children } = this.props
    const { MenuItems } = Wrapper
		return (
			<div>
				{this.renderNavbar()}
        <Sidebar items={MenuItems}/>
				{children}
			</div>
		)
	}
}

export default Wrapper
