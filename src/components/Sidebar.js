import React, { PropTypes, Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

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
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-avatar">
          <img alt="Kosi" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12246688_10207707866513040_7752400638614787415_n.jpg?oh=b63af0c1094c390206628b92820980d9&oe=589E71DB" />
        </div>
        {this.renderItems()}
        <a className="app-logout">
          Log Out
        </a>
      </div>
    )
  }
}

export default connect()(Sidebar)
