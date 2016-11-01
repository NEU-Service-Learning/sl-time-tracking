import React, { PropTypes, Component } from 'react'

import './Sidebar.css'

class Sidebar extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    })),
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    items: [],
    onToggle: () => {},
  }

  renderItems() {
    const { items } = this.props
    return items.map((item, index) => {
      const { onClick, icon, label, active } = item
      const className = active ? "active item" : "item"
      return (
        <a key={index} onClick={onClick} className={className}>
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

export default Sidebar
