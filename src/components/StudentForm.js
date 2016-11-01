import React, { Component, PropTypes } from 'react'

import Content from '../components/Content'
import Items from '../components/Items'
import Map from '../components/Map'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Dropdown from '../components/Dropdown'
import TextBox from '../components/TextBox'


class StudentForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }
  render() {
    return (
      <div>
        WHY?!?!?!?
        <Dropdown title='Type of Service'/>
        <hr/>
        <Dropdown title='Service Partner'/>
        <hr/>
        <Dropdown title='Service Project'/>
        <hr/>
        {/*<TextBox placeholderText='This is a space for you to leave any notes about your service!' />*/}
      </div>
    )
  }
}

export default Button
