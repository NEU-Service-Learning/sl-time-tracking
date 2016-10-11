import React, { PropTypes, Component } from 'react'

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
      <div id="sidebar" className="ui left vertical inverted sidebar labeled icon menu visible">
        {this.renderItems()}
      </div>
    )
  }
}

export default Sidebar
