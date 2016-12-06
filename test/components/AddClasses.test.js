import React from 'react';
import ReactDOM from 'react-dom';
import AddClasses from '../../src/pages/Classes/AddClasses';

describe('AddClasses', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<AddClasses />, div)
	});
})
