import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import TimeInput from '../../src/components/TimeInput'

describe('TimeInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
	  ReactDOM.render(<TimeInput />, div)
	})

	it('shows the correct classes', () => {
		const props = {
			className: 'test'
		}
		const wrapper = mount(<TimeInput { ...props } />)
		expect(wrapper.props().className).toEqual(props.className)
	})

  it('uses hours passed in', () => {
		const props = {
			hours: 'test'
		}
		const wrapper = mount(<TimeInput { ...props } />)
    const { value } = wrapper.find('input').get(0)
    expect(value).toEqual(props.hours)
	})

  it('uses minutes passed in', () => {
		const props = {
			minutes: 'test'
		}
		const wrapper = mount(<TimeInput { ...props } />)
    const { value } = wrapper.find('input').get(1)
    expect(value).toEqual(props.minutes)
	})

  it('calls onChange when you change value', () => {
    const onChange = spy()
    const props = {
			onChange
		}
		const wrapper = mount(<TimeInput { ...props } />)
    wrapper.find({ name: 'hours' }).simulate('change', { target: { value: '12' }});
    expect(onChange.calledOnce).toEqual(true)
  })

})
