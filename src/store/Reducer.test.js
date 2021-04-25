
import {configure} from 'enzyme'

import Reducer from './Reducer'
import * as Action from './Action'





describe('Reducer', () => {


it('should return the initial state', () => {

expect(Reducer(undefined, {})).toEqual({
   registered: false,
    isAuthenticated: false,
    products: [],
    EditPro: [],
    jst: ' ',
    viewreg: [],
    comments:[]



})

})

it('should change the isAuthenticated to true upon login', () => {

expect(Reducer({
   registered: false,
   isAuthenticated: false,
   products: [],
   EditPro: [],
   jst: '',
   viewreg: [],
   comments:[]

},

{
type: Action.LOGIN,

isAuthenticated: true,
val: 'mailandpwd',
data: [{name:"suresh",
details:'abc'
}]


}


)).toEqual({

   registered: false,
   isAuthenticated: true,
   products: [],
   EditPro: [],
   jst: 'mailandpwd',
   viewreg: [{name:"suresh",
   details:'abc'
   }],
   comments:[]



})

})


})






