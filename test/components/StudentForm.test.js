import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import StudentForm from '../../src/components/StudentForm'

describe('StudentForm', () => {
	it('renders without crashing', () => {
		const form = document.createElement('dropdown')
	  ReactDOM.render(<StudentForm />, form)
	});
})
