import React, { Component, PropTypes } from 'react'

import './Modal.css'

class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    header: PropTypes.string,
    approveLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    approveOnClick: PropTypes.func,
    cancelOnClick: PropTypes.func,
    isVisible: PropTypes.bool,
  }
  static defaultProps = {
    header: 'Modal!',
    approveLabel: 'Submit',
    cancelLabel: 'Cancel',
    approveOnClick: () => { console.log('yes') },
    cancelOnClick: () => { console.log('no') },
    isVisible: false,
  }
  render() {
    const { className, label, onClick, children, header, isVisible, approveOnClick, approveLabel, cancelLabel, cancelOnClick } = this.props
    if (!isVisible) {
      console.log('is not visible.')
      return null;
    }
    console.log('is visible!')
    return (
      <div className = 'backdrop'>
        <div className='ui modal active'>
          <div className='header'>
            {header}
          </div>
          <div className='content'>
            {console.log(children)}
            {children}

          </div>
          <div className='actions'>
            <div className='ui approve button' onClick={approveOnClick}>{approveLabel}</div>
            <div className='ui cancel button' onClick={cancelOnClick}>{cancelLabel}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
