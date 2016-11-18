import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Button from './Button'
import Sidebar from './Sidebar'
import MenuIcon from '../img/menu.svg'
import MenuIconAlt from '../img/menu-alt.svg'

import MenuCloseIcon from '../img/menu-close.svg'
import MenuCloseIconAlt from '../img/menu-close-alt.svg'
import Modal from './Modal'

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
      navbarTypes: ['', 'alt'],
      routes: ['/', '/enter-time'],
    },
    {
      label: 'Classes',
      navbarTypes: ['alt'],
      routes: ['/classes'],
    },
    {
      label: 'Register for Classes',
      navbarTypes: [''],
      routes: ['/classes/add'],
    },
    {
      label: 'Settings',
      navbarTypes: ['alt'],
      routes: ['/settings'],
    },
    {
      label: 'Help',
      navbarTypes: [''],
      routes: ['/help'],
    }
  ]

  handleClick = () => {
    const { dispatch, admin } = this.props
    dispatch({ type: 'SET_ADMIN', payload: !admin })
  }

	renderNavbar() {
    const { admin, navToggled, dispatch, location } = this.props
    const { pathname } = location
    let type = ''
    Wrapper.MenuItems.forEach(item => {
      const index = item.routes.indexOf(pathname)
      if (index !== -1 && item.navbarTypes[index]) {
        type = 'alt'
      }
    })
    const menuIcon = type === 'alt' ? MenuIconAlt : MenuIcon
    const closeIcon = type === 'alt' ? MenuCloseIconAlt : MenuCloseIcon
		return (
      <div className={type === 'alt' ? 'nav-white' : 'nav-purple'}>
  			<div style={{ padding: '2rem 0' }} className="ui container">
  				<div className="ui secondary menu" style={{ marginLeft: 0 }}>
            <div className="left menu">
              <img onClick={(e) => {
                  e.stopPropagation()
                  dispatch({ type: 'SET_NAVBAR', payload: !navToggled })
                }} className="nav-icon" src={!navToggled ? menuIcon : closeIcon} alt="Menu"/>
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
		const { children, navToggled, location, dispatch} = this.props
    const { MenuItems } = Wrapper

    const classNav = navToggled ? 'nav-open' : 'nav-closed'
		return (
			<div>
        {navToggled ? <Sidebar navToggled={navToggled} location={location} items={MenuItems} /> : null}
        <div onClick={() => dispatch({ type: 'SET_NAVBAR', payload: false })} className={classNav}>
				  {this.renderNavbar()}
          {children}
        </div>
        <Modal />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({...state.auth, ...state.app})

export default connect(mapStateToProps)(Wrapper)
