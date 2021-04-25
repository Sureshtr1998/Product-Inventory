import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Login} from './Login'


configure({adapter: new Adapter()});



describe('Login Component', () => {







it('should validate form element', () => {
    expect(shallow(<Login />).find('form').exists()).toBe(true)
  })



  it('renders a email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1)
   })


   it('renders a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1)
   })

})



describe('Email input', () => {
  
    it('should trigger change event and changes the state of it according to change event', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'test@gmail.com'}});
     
    expect(wrapper.state('email')).toEqual('test@gmail.com');
    })
   })
   
   describe('Password input', () => {
    
    it('should trigger change event and changes the state of it according to change event', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: '12345'}});
     
     expect(wrapper.state('password')).toEqual('12345');
    })
   })

