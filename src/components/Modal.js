import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './Modal.css'

class Modal extends Component {
  static propTypes = {
    modals: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      header: PropTypes.any,
      content: PropTypes.any,
      footer: PropTypes.any,
      className: PropTypes.string,
      key: PropTypes.number,
    })),
  }

  closeModal(key) {
    const { dispatch } = this.props
    dispatch({ type: 'CLOSE_MODAL', payload: key })
  }

  resetModals(e) {
    const { dispatch } = this.props
    dispatch({ type: 'RESET_MODAL' })
  }

  renderModal (modal) {
    const { key, header, content, footer, className = '', type = '' } = modal
    return (
    <div onClick={(e) => e.stopPropagation()} key={key} className={`ui active ${type} modal modal-fix ${className}`}>
      <i onClick={() => this.closeModal(key)} className="close icon"></i>
      <div className="header">
        {header}
      </div>
      <div className="content">
      {content}
      </div>
      <div className="actions">
        {footer}
      </div>
    </div>
    )
  }

  render () {
    const { modals } = this.props
    if (modals.length === 0) {
      return null
    }
    return (
      <div onClick={(e) => this.resetModals(e)} className='ui dimmer modals page transition visible active'>
      {modals.map((modal) => this.renderModal(modal))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.modal})

export default connect(mapStateToProps)(Modal)
