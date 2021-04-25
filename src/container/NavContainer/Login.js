import React, { Component } from 'react'

import {connect} from 'react-redux'
import * as Action from '../../store/Action'


import swal from 'sweetalert'







 export class Login extends Component {

    state = {
        EmailID: '',
        Password : '',
        justforalert: ''
        
    }




    
onChange= (e) => {
	this.setState({[e.target.name]: e.target.value})
	
}

	
	onSubmit = (e) => {
        e.preventDefault();
      
    
        let ProductInventory={};


        ProductInventory.EmailID=   this.state.EmailID;
        ProductInventory.Password=   this.state.Password ;

        this.setState({justforalert:this.state.EmailID+this.state.Password}) 

     this.props.onLogin(ProductInventory,  this.state.justforalert)

     

            


   
     
    }

 
    
  
componentDidUpdate(prevprops) {
 if(this.props.jst !== prevprops.jst)
 {

   
 this.props.isAuthenticated ?
 
swal("Signed In!", "You Signed In Successfully!!!", "success")
  .then(() => {this.props.history.push('/product_inventory')})
 

:  

swal("Signed In Failed!", "Wrong credentials entered!!!", "warning")
.then(() => {this.setState({EmailID: '', Password: ''})})

 

 }

}
    






    render()
{ 
   



    return (

      <div className="container">
      <div className="row py-5 mt-4 align-items-center">

          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
              
              </div>

              <div className="col-md-7 col-lg-6 ml-auto">

                <form onSubmit={this.onSubmit}>


                 
                <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-envelope text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="email" type="email" name="EmailID" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"
                                            value={this.state.EmailID} onChange={this.onChange} required />

                                    </div>



                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-lock text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="password" type="password" name="Password" placeholder="Password" className="form-control bg-white border-left-0 border-md"
                                            value={this.state.Password} onChange={this.onChange} required />

                                    </div>
  
  
                  <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                 
                </form>
              </div>
            </div>
          </div>
        

  
    )
}

 }

const mapstatetoprops = state => {
    return {
isAuthenticated: state.isAuthenticated,
jst: state.jst
    }
}


const mapdispatchtoprops = dispatch => {
    return {
        onLogin : (data, justforalert) => dispatch(Action.login_func(data, justforalert))
    }
}








export default connect(mapstatetoprops,mapdispatchtoprops)(Login)