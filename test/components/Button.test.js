import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import Button from '../../src/components/Button'

describe('Button', () => {
	it('renders without crashing', () => {
		const button = document.createElement('button')
	  ReactDOM.render(<Button />, button)
	});

	it('shows the correct classes', () => {
		const props = {
			className: 'test'
		}
		const wrapper = mount(<Button { ...props } />)
		expect(wrapper.props().className).toEqual(props.className)
	});

	it('passes onclick', () => {
		const onButtonClick = spy()
    const wrapper = mount(
      <Button onClick={onButtonClick} />
    )
    wrapper.find('button.ui.button').simulate('click')
    expect(onButtonClick.calledOnce).toEqual(true)
	})
})
