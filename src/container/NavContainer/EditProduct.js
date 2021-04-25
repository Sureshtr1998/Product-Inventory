import React from 'react';
import { Button } from 'react-bootstrap'
import './Home.css'
import * as Action from '../../store/Action'
import { connect } from 'react-redux'
import swal from 'sweetalert'

class EditProduct extends React.Component {
    state = {
        Product_name: '',
        Manufacturer: '',
        Price: '',
        Quantity: '',
        Product_description: '',
        chng: 0
    }
    componentDidMount() {
        this.props.onedLoad(this.props.location.state.id)




    }

    componentDidUpdate(prevprops) {
        if (this.props.EditPro !== prevprops.EditPro) {
            const Edit = this.props.EditPro
            this.setState({
                Product_name: Edit.Product_name, Manufacturer: Edit.Manufacturer, Price: Edit.Price,
                Quantity: Edit.Quantity, Product_description: Edit.Product_description

            })
        }
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, chng: 1 })

    }


    onSubmit = (e) => {
        e.preventDefault();
if(this.state.chng === 0){

    swal("Failed to Edit!", "Please change the value to successfully edit !");
}

    else
    {   
        
        swal("Edited!", "You've successfully edited a Product!!!", "success")
            .then(() => this.props.history.push('/product_inventory'))

        let ProductInventory = {};


        ProductInventory.Product_name = this.state.Product_name;
        ProductInventory.Manufacturer = this.state.Manufacturer;
        ProductInventory.Price = this.state.Price;
        ProductInventory.Quantity = this.state.Quantity;
        ProductInventory.Product_description = this.state.Product_description;
        ProductInventory.Date = new Date().toLocaleDateString()


        console.log(ProductInventory)

        this.props.EditSub(this.props.location.state.id, ProductInventory)
    }

    }




    render() {

        return (
            <React.Fragment>



                <div className="container">
                    <div className="row py-5 mt-4 align-items-center">

                        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />

                        </div>


                        <div className="col-md-7 col-lg-6 ml-auto">


                            <form onSubmit={this.onSubmit}>

                            <h3  style={{
                                textAlign:'center',
 border: '1px solid #eee',
 marginBottom:'20px',
 boxShadow:' 0 2px 3px #ccc',
 boxSizing: 'border-box',
 color:'blue'}}>Edit Product</h3>
                                <div className="row">

                                    <div className="input-group col-lg-6 mb-4">

                                        <input type="text" placeholder="Product Name" name="Product_name"
                                            className="form-control bg-white  border-md"
                                            value={this.state.Product_name} onChange={this.onChange} required />
                                    </div>


                                    <div className=" input-group col-lg-6 mb-4">
                                        <input type="text" placeholder="Manufacturer" name="Manufacturer" minLength="5"
                                            className="form-control bg-white   border-md"
                                            value={this.state.Manufacturer} onChange={this.onChange} required />


                                    </div>


                                    <div className="input-group col-lg-12 mb-4">
                                        <input type="text" style={{ width: '80%' }} placeholder="Product Description" name="Product_description"
                                            className="form-control bg-white   border-md"
                                            value={this.state.Product_description} onChange={this.onChange} required />


                                    </div>







                                    <div className="input-group col-lg-6 mb-4">
                                        <input type="number" placeholder="Enter Price" name="Price"
                                            className="form-control bg-white   border-md"
                                            value={this.state.Price} onChange={this.onChange} required />


                                    </div>

                                    <div className="input-group col-lg-6 mb-4">
                                        <input type="number" placeholder="Enter Quantity" name="Quantity"
                                            className="form-control bg-white  border-md"
                                            value={this.state.Quantity} onChange={this.onChange} required />

                                    </div>





                                    <div className="form-group col-lg-12 mx-auto mb-0">
                                        <Button className="btn btn-primary btn-block py-2 font-weight-bold" variant="primary" type='submit'> Submit </Button>

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

        EditPro: state.EditPro

    }
}
const mapdispatchtoprops = dispatch => {

    return {


        onedLoad: (data) => dispatch(Action.Chart(data)),
        EditSub: (id, data) => dispatch(Action.EditSub(id, data))
    }
}



export default connect(mapstatetoprops, mapdispatchtoprops)(EditProduct);