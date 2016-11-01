import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import TextBox from '../../src/components/TextBox'

describe('TextBox', () => {
	it('renders without crashing', () => {
		const textbox = document.createElement('textbox')
	  ReactDOM.render(<TextBox />, textbox)
	});
})
