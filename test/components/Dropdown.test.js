import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import Dropdown from '../../src/components/Dropdown'

describe('Dropdown', () => {
	it('renders without crashing', () => {
		const dropdown = document.createElement('dropdown')
	  ReactDOM.render(<Dropdown />, dropdown)
	});
})
