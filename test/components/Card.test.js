import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import Card from '../../src/components/Card'

describe('Card', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
	  ReactDOM.render(<Card />, div)
	});

	it('shows the correct classes', () => {
		const props = {
			title: 'test',
			content: [{
				icon: "user icon",
				text: "22 friends",
			}],
		}
		const wrapper = mount(<Card { ...props } />)
  	expect(wrapper.props().title).toEqual(props.title)
		expect(wrapper.props().content).toEqual(props.content)
	});

	it('passes onclick', () => {
		const onButtonClick = spy()
    const wrapper = mount(
      <Card onClick={onButtonClick} />
    )
    wrapper.find('div.ui.card').simulate('click')
    expect(onButtonClick.calledOnce).toEqual(true)
	})
})
