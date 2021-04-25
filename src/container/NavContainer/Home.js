import React from 'react';
import { Button } from 'react-bootstrap'
import './Home.css'
import * as Action from '../../store/Action'
import { connect } from 'react-redux'
import swal from 'sweetalert'


export class Pform extends React.Component {
    state = {
        EmailID: '',
        Password: '',
        Firstname: '',
        Lastname: '',
        Location: '',
        MobileNumber: '',
        confPassword: '',
        justforalert: ''

    }



    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.Password !== this.state.confPassword) {

            swal({
                title: "Password doesn't match!",
                text: "Please try again!!!",
                icon: "warning",
            });
        }


        else {



            this.setState({ justforalert: this.state.EmailID + this.state.Password })
            let ProductInventory = {};


            ProductInventory.EmailID = this.state.EmailID;
            ProductInventory.Password = this.state.Password;
            ProductInventory.Firstname = this.state.Firstname;
            ProductInventory.Lastname = this.state.Lastname;
            ProductInventory.Location = this.state.Location;
            ProductInventory.MobileNumber = this.state.MobileNumber;
            ProductInventory.Date = new Date().toLocaleDateString()

            console.log(ProductInventory)

            this.props.onRegister(ProductInventory, this.state.justforalert)


        }
    }





    componentDidUpdate(prevprops) {
        if (this.props.jst !== prevprops.jst) {

            this.props.registered ?


                swal("Registered Successful!", "You Registered Successfully!!!", "success")
                    .then(() => { this.props.history.push('/Login') })


                :

                swal("Register Failed!", "Email Id already exists!!!", "warning")
                    .then(() => { this.setState({ EmailID: '', Password: '', confPassword: '' }) })



        }

    }


    render() {




        return (

            <React.Fragment>



                <div className="container">
                <h1 style={{paddingTop:'20px'}}>Create an Account</h1>
                    <div className="row py-5 mt-4 align-items-center">
                            
                        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
                           

                        </div>


                        <div className="col-md-7 col-lg-6 ml-auto">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">

                                    <div className="input-group col-lg-6 mb-4">
                                        <div style={{ paddingBottom: '0px' }} className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-user text-muted"></i>
                                            </span>
                                        </div>

                                        <input type="text" name="Firstname" placeholder="First Name" className="form-control bg-white  border-left-0 border-md"
                                            value={this.state.Firstname} onChange={this.onChange} required />

                                    </div>


                                    <div className="input-group col-lg-6 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-user text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="lastName" type="text" name="Lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md"
                                            value={this.state.Lastname} onChange={this.onChange} required />

                                    </div>


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
                                                <i className="fa fa-phone-square text-muted"></i>
                                            </span>
                                        </div>
                                        <select id="countryCode" style={{ maxWidth: '80px' }} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                                            <option value="">+91</option>

                                        </select>
                                        <input id="phoneNumber" type="tel" name="MobileNumber" placeholder="XXXXXXXXXX" className="form-control bg-white border-md border-left-0 pl-3"
                                            pattern="[0-9]{10}" required value={this.state.MobileNumber} onChange={this.onChange} />

                                    </div>



                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-map-marker  text-muted"></i>
                                            </span>
                                        </div>
                                        <input type='text' id="job" name="Location" placeholder='Location' className="form-control bg-white border-left-0 border-md"
                                            value={this.state.Location} onChange={this.onChange} required />


                                    </div>


                                    <div className="input-group col-lg-6 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-lock text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="password" type="password" name="Password" placeholder="Password" className="form-control bg-white border-left-0 border-md"
                                            value={this.state.Password} onChange={this.onChange} required />

                                    </div>


                                    <div className="input-group col-lg-6 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-lock text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="passwordConfirmation" type="password" name="confPassword" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md"
                                            value={this.state.confPassword} onChange={this.onChange} required />

                                    </div>

                                    <center>    </center>


                                    <div className="form-group col-lg-12 mx-auto mb-0">
                                        <Button className="btn btn-primary btn-block py-2 font-weight-bold" variant="primary" type='submit'> Submit </Button>

                                    </div>



                                    <br />
                                    <br />
                                    <br />




                                    <div className="text-center w-100">
                                        <p className="text-muted font-weight-bold">Already Registered? <a style={{textDecoration:'none'}}className="text-primary ml-2" href='/Login'> Login</a></p>
                                    </div>
                                </div>




                            </form>



                        </div>
                    </div>


                </div>


            </React.Fragment>

        )






    }


}






const mapstatetoprops = state => {

    return {
        registered: state.registered,
        jst: state.jst

    }
}
const mapdispatchtoprops = dispatch => {

    return {

        onRegister: (data, jst) => dispatch(Action.register_func(data, jst))
    }
}



export default connect(mapstatetoprops, mapdispatchtoprops)(Pform);