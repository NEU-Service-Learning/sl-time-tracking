import React, { Component, PropTypes } from 'react'

class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    options: PropTypes.array,
    isVisible: PropTypes.bool,
    selected: PropTypes.string,
    onClick: PropTypes.func,
  }
  static defaultProps = {
    onClick: (item) => { console.log(item) },
    options: ['male', 'female'],
    selected: ''
  }
  render() {
    const { selected, children, options, title, onClick } = this.props
    return (
      <div>
      {title}
      <div className="ui fluid simple dropdown">
        <input type="hidden" name="gender" />
        <i className="dropdown icon"></i>
        {selected === '' ?
          <div className="default text">{'Select ' + title + ' from the dropdown!'}</div>
          : null
        }
        {selected}
        <div className="menu fluid">
          <div className="item fluid" onClick={() => onClick(options[0])}>{options[0]}</div>
          <div className="item fluid" onClick={() => onClick(options[1])}>{options[1]}</div>
        </div>
      </div>
      </div>
    )
  }
}

export default Dropdown
