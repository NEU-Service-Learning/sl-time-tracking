import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme'
import { Container, Menu } from 'semantic-ui-react'

import Admin from '../src/pages/Admin/Admin';

describe('Admin', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<Admin />, div)
	});

  it('renders 1 container', () => {
    const wrapper = mount(<Admin />)
    const container = wrapper.find(Container)
    expect(container.length).toEqual(1)
  });

  it('renders 1 menu', () => {
    const wrapper = mount(<Menu />)
    const menu = wrapper.find(Menu)
    expect(menu.length).toEqual(1)
  });
})
