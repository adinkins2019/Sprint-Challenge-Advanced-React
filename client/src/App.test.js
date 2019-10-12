import React from 'react';
import App from './App';
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'

it('renders without crashing', () => {
 const wrapper = rtl.render(<App />)
 console.log(wrapper.debug())
});
