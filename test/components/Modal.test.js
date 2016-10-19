import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import Modal from '../../src/components/Modal'

describe('Modal', () => {
	it('renders without crashing', () => {
		const modal = document.createElement('modal')
	  ReactDOM.render(<Modal />, modal)
	});
})
