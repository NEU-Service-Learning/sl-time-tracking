import React, { Component, PropTypes } from 'react'

class TextBox extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    options: PropTypes.array,
    placeholderText: PropTypes.string,
  }
  render() {
    const { children, placeholderText } = this.props
    return (
      <div className='modal'>
        ???
        <br/>
        Start Time
        <div className="ui calendar eight wide column" id="example5">
          <div className="ui input left icon">
            <i className="calendar icon"></i>
            <input type="text" placeholder="Date" value="5/30/2015 3pm" />
          </div>
        </div>
        End Time
        <div className="ui calendar eight wide column" id="example6">
          <div className="ui input left icon">
            <i className="calendar icon"></i>
            <input type="text" placeholder="Date" value="5/30/2015 4pm" />
          </div>
        </div>
        <br/>
        Notes
        <div className="ui fluid input">
          <input type="text" placeholder={placeholderText} />
        </div>
        </div>
    )
  }
}

export default TextBox
