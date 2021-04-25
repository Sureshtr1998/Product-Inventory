import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AddProduct} from './AddProduct'


configure({adapter: new Adapter()});



describe('Inserting Component', () => {







it('should validate form element', () => {
    expect(shallow(<AddProduct />).find('form').exists()).toBe(true)
  })



  it('renders a Add Product Name', () => {
    expect(shallow(<AddProduct />).find('#Product_name').length).toEqual(1)
   })


   it('renders a Price input', () => {
    expect(shallow(<AddProduct />).find('#Price').length).toEqual(1)
   })

})



describe('Add Product input', () => {
  
    it('should trigger change event and changes the state of it according to change event', () => {
     
     const wrapper = shallow(<AddProduct />);
     wrapper.find('#Product_name').simulate('change', {target: {name: 'Product_name', value: 'Cello'}});
     
    expect(wrapper.state('Product_name')).toEqual('Cello');
    })
    it('should trigger change event and changes the state of it according to change event', () => {
     
     const wrapper = shallow(<AddProduct />);
     wrapper.find('#Price').simulate('change', {target: {name: 'Price', value: '25'}});
     
    expect(wrapper.state('Price')).toEqual('25');
    })




   })
   
  