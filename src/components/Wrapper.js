import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Button from './Button'
import Sidebar from './Sidebar'
import MenuIcon from '../img/menu.svg'
import MenuCloseIcon from '../img/menu-close.svg'

import './Wrapper.css'

class Wrapper extends Component {
  static propTypes = {
    admin: PropTypes.bool,
    dispatch: PropTypes.func,
    navToggled: PropTypes.bool,
  }

  static MenuItems = [
    {
      label: 'Time Tracker',
      onClick: () => {},
      active: true,
    },
    {
      label: 'Settings',
      onClick: () => {},
      active: false,
    },
    {
      label: 'Help',
      onClick: () => {},
      active: false,
    }
  ]

  handleClick = () => {
    const { dispatch, admin } = this.props
    dispatch({ type: 'SET_ADMIN', payload: !admin })
  }

	renderNavbar() {
    const { admin, navToggled, dispatch } = this.props
		return (
      <div className="nav-purple">
  			<div style={{ padding: '2rem 0' }} className="ui container">
  				<div className="ui secondary menu">
            <div className="left menu">
              <img onClick={() => dispatch({ type: 'SET_NAVBAR', payload: !navToggled } )} className="nav-icon" src={!navToggled ? MenuIcon : MenuCloseIcon} alt="Menu"/>
  				  </div>

  				  <div className="right menu">
              <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '0 2rem',
                  color: 'white',
                }}>
                Logged in as { admin ? 'Admin' : 'Student' }
              </div>
  		        <Button onClick={this.handleClick}>
                Login as { admin ? 'Student' : 'Admin' }
              </Button>
  				  </div>
  				</div>
        </div>

			</div>
		)
	}

	render () {
		const { children, navToggled } = this.props
    const { MenuItems } = Wrapper
    const classNav = navToggled ? 'nav-open' : 'nav-closed'
		return (
			<div className={classNav}>
        {navToggled ? <Sidebar items={MenuItems} /> : null}
				{this.renderNavbar()}
				{children}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({...state.auth, ...state.app})

export default connect(mapStateToProps)(Wrapper)
