import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HomePage from './HomePage'


configure({adapter: new Adapter()});



describe('HomePage Component', () => {







it('should validate NavLink element', () => {

   
    expect(shallow(<HomePage />).find('NavLink')). toHaveLength(3)
  })


  it('should validate Paragraph element', () => {

   
    expect(shallow(<HomePage />).find('p')). toHaveLength(2)
  })



})

