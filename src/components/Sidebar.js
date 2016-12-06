import React, { PropTypes, Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

import { logoutUser } from '../redux/actions/auth'
import './Sidebar.css'

class Sidebar extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      routes: PropTypes.arrayOf(PropTypes.string),
    })),
    onToggle: PropTypes.func,
    dispatch: PropTypes.func,
    location: PropTypes.object,
    loggedIn: PropTypes.bool,
    navToggled: PropTypes.bool,
  }

  static defaultProps = {
    items: [],
    onToggle: () => {},
  }

  renderItems() {
    const { location, items, dispatch, navToggled } = this.props
    const { pathname } = location
    return items.map((item, index) => {
      const { icon, label, routes } = item
      const active = routes.indexOf(pathname) !== -1
      const className = active ? "active item" : "item"
      return (
        <a
          key={index}
          onClick={() => {
            dispatch({ type: 'SET_NAVBAR', payload: !navToggled })
            dispatch(push(routes[0]))}
          }
          className={className}>
          <i className={icon}></i>
          {label}
        </a>
      )
    })
  }
  render() {
    const { loggedIn, dispatch } = this.props

    if (!loggedIn) {
      return null
    }
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-avatar">
          <Icon name='user' />
        </div>
        {this.renderItems()}
        <a onClick={() => {
            dispatch(logoutUser())
            dispatch({ type: 'SET_NAVBAR', payload: false })
          }} className="app-logout">
          Log Out
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.auth})

export default connect(mapStateToProps)(Sidebar)
