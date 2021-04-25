import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Pform as Register} from './Home'


configure({adapter: new Adapter()});



describe('Register Component', () => {







it('should validate form element', () => {
    expect(shallow(<Register />).find('form').exists()).toBe(true)
  })



  it('renders a email input', () => {
    expect(shallow(<Register />).find('#email').length).toEqual(1)
   })


   it('renders a password input', () => {
    expect(shallow(<Register />).find('#password').length).toEqual(1)
   })

})



describe('Email input', () => {
  
    it('should trigger change event and changes the state of it according to change event', () => {
     
     const wrapper = shallow(<Register />);
     wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'test@gmail.com'}});
     
    expect(wrapper.state('email')).toEqual('test@gmail.com');
    })
   })
   
   describe('Password input', () => {
    
    it('should trigger change event and changes the state of it according to change event', () => {
     
     const wrapper = shallow(<Register />);
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: '12345'}});
     
     expect(wrapper.state('password')).toEqual('12345');
    })


    it('password Confirmation', () => {
     
        const wrapper = shallow(<Register />);
        wrapper.find('#passwordConfirmation').simulate('change', {target: {name: 'confPassword', value: '12345'}});
        
        expect(wrapper.state('confPassword')).toEqual('12345');
       })
   


   })

