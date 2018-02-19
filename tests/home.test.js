import React from 'react';
import Home from '../src/Home';
import {shallow} from 'enzyme'; //to render react component virtuallyimport 
//import toJson from 'enzyme-to-json'; //include when you want to implement snapshot tests
var config = require('./config.js');

test('Home page should render as expected !',() => {
    const component = shallow(<Home />)
/*  const domContent = toJson(component);
    expect(domContent).toMatchSnapshot(); 
    // for snapshot tests
*/  
    expect(component.contains('Welcome to home !')).toBe(true);
});