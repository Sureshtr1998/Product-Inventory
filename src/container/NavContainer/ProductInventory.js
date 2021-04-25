import React, { Component } from 'react'
import * as Action from '../../store/Action'
import {connect} from 'react-redux'
import { Form, Button, Modal} from 'react-bootstrap'
import {  MDBDataTableV5 } from 'mdbreact';
import './Home.css'
import swal from 'sweetalert'

export class ProductInventory extends Component {

state ={

  index: 0,
  showModal: false,
  delid: [],
  val: false,
  tmp: 1,
  chk: false,
  id: true,
  prodname: true,
  manufacture: true,
  Description: true,
  price: true,
  qty: true
}
componentDidMount() {
 
this.props.onInit()

}


chkhandler = (info ) => {

this.setState({delid: this.state.delid.concat(info)}) 

}

 onDelete = (id) => {
let subdelid = []

swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this data!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
if(willDelete){

  if(this.state.delid.length > 1){
    subdelid = this.state.delid
    
    subdelid.forEach(data => {this.props.onDel(data)})
    
    
    }
    
    else{
    
      subdelid = id
    
      this.props.onDel(subdelid)
    
    }
    const cbs = document.querySelectorAll('input[type="checkbox"]');
    cbs.forEach((cb) => {
        cb.checked = false;
    });
      
 
    
    this.setState({delid: [], val: false})
    this.props.history.push('/product_Inventory')


    swal("Product(s) has been successfully deleted !", {
      icon: "success",
    })

  }

  else{
    swal.close();
  }
  })







}

onEdit =(id) => {

this.props.history.push('/product_Inventory/edit', {id})
}

viewregistrationdetails = () => {
const vrd = this.props.viewreg;

 
  swal("Hi! "+vrd.Firstname+" "+vrd.Lastname+", Good to see you!! ",   
  " Here are some of your basic registration information: \n \n Email Id: "+vrd.EmailID+
  " \n Mobile Number: "+vrd.MobileNumber+"\n Location: "+vrd.Location+"\n Date of creation: "+vrd.Date);
}

logout = () => {
  this.props.onLogout()
  swal("Logged Out!", "Logged Out sucessful!", "success")
  .then (() => this.props.history.push('/'))



}

onView=(id, bool, ind) => {
console.log(id)
console.log(ind)

 
  this.setState({tmp: this.state.tmp+1})
  
  this.setState({index: id , showModal: bool});

//  this.props.Chart(ind,ind.Count+this.state.tmp)
  this.props.Chart(ind._id)

 

}


render() {

 
  const View = (props)  => {
  

    
   let newdel = this.props.products.find(item=>item._id===this.state.index);



    console.log(this.props.products.length)
   
   
  return (
 
  !newdel  ? null :<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
         Product Name: {newdel.Product_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> Manufacturer: {newdel.Manufacturer}</h4>
          <p>
                <b>{newdel.Product_name}</b> costs <b>{newdel.Price}</b> manufactured by <b>{newdel.Manufacturer}</b> company!!!.
                This product was added into the inventory on <b>{newdel.Date}</b> for <b>{newdel.Quantity}</b> quantity.

          </p>
  <p> Description: {newdel.Product_description}</p>
        </Modal.Body>
        <Modal.Footer>
      {/* <Button style={{paddingRight:'60%'}} onClick={props.onHide}>Close</Button>  */}
          <Button  style={{width:'70px'}} variant='success' onClick={() => this.onEdit(newdel._id)}>Edit</Button>
          <Button style={{width:'70px'}} variant='danger' onClick={() => this.onDelete(newdel._id)}>Delete</Button>
        </Modal.Footer>
      </Modal>
  )
     
    }
  

  


  const data = {
    columns: [
    !this.state.chk ? {label: '', field: 'ch'} :  {
       label: 'Check',
        field: 'chk_box',
        val:0
    
      },

      {
        label: 'Id',
        field: 'id',
        sort: 'asc',
        val:0
      
      },
       {
        label: 'Product Name',
        field: 'name',
        sort: 'asc',
        val:0
      },
      !this.state.manufacture ? {label: '', field: 'mn'} : {
        label: 'Manufacturer',
        field: 'manufacture',
        sort: 'asc',
        width: 200
      },
      !this.state.Description ? {label: '', field: 'desc'} : {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 100
      },
      !this.state.price ? {label: '', field: 'pr'} :  {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 150
      },

      !this.state.qty ? {label: '', field: 'qt'} :  {
        label: 'Quantity',
        field: 'quantity',
        sort: 'asc',
        width: 150
      },

       {
        label: 'Actions',
        field: 'Actions',
     
        width: 100
      }
    ],
    rows: [  ]

  }





  
this.props.products.map((ind,index)=> data.rows.push({isAuth: this.props.isAuthenticated, 
  key: ind._id, id: index+1,  name: ind.Product_name, description: ind.Product_description,            
 manufacture: ind.Manufacturer, price: parseInt(ind.Price), quantity: parseInt(ind.Quantity), Count: ind.Count,
 
 Actions: <><Button variant='success'  
 disabled = {!this.props.isAuthenticated} 
 style={{ marginRight:'8%', width:'70px'}}
 onClick = {() => this.onView(ind._id , true, ind ) }
 >View</Button>


  <Button variant='danger' 
   disabled = {!this.props.isAuthenticated} 
  style={{width:'70px'}}
  onClick={() =>  this.onDelete(ind._id)  }
  >Delete</Button> </>,

  
  chk_box: <input type='checkbox' 
  style={{ paddingRight:'2000px', textAlign:'center'}}

  onClick={() => this.chkhandler(ind._id)}
  />


})



)



  return(

<React.Fragment>

<center>


    {this.props.isAuthenticated ? 
<div style={{padding:'10px', marginLeft: '10px'}}>
{/* fa-binoculars */}
<i className="fa  fa-eye  fa-2x" style={{display:'inline-block', marginRight: '5%', color:'#3f5c32'}} 
onClick = {this.viewregistrationdetails}></i>



  
    
<div style={{
  width: '60%',
 border: '1px solid #eee',
 boxShadow:' 0 2px 3px #ccc',
 padding: '10px',
 margin: '10px 70px',
 boxSizing: 'border-box',
 display:'inline-block'
}}>

     <center>    
       
         <Form.Label ><u>Choose fields:</u></Form.Label>
                <br/>
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({chk: !this.state.chk})} 
              label='Check Box' 
              checked= {this.state.chk}
              />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({manufacture: !this.state.manufacture})} 
              label='Manufacturer'   
            checked= {this.state.manufacture}
            
            />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({Description: !this.state.Description})}
            label='Description' 
            checked= {this.state.Description}
             />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({price: !this.state.price})} 
             label='Price'
            checked= {this.state.price}    />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({qty: !this.state.qty})} 
             label='Quantity'
            checked= {this.state.qty}    />
</center>
</div>
{/* FONT AWESOME */}


<i style={{margin:'2%', color:'#2a8f91'}} onClick={()=>{ this.props.history.push('/graph');

}} className="fa fa-bar-chart fa-2x" ></i>


<i style={{margin:'1%', color:'#b82e39'}} className="fa fa-sign-out fa-2x "
onClick={this.logout}
></i>









</div>


     :
     
     <div>
     
     
     <p style={{color: 'red', textAlign:'center', marginTop:'10px'}}> 
    Please <u onClick={() => this.props.history.push('/Login')}>Sign In</u> or &nbsp;
    <u onClick={() => this.props.history.push('/')}>Register </u>  
     to Add, Delete, View, Edit Product Inventory</p>
  


  
    
     <div style={{
  width: '60%',
 border: '1px solid #eee',
 boxShadow:' 0 2px 3px #ccc',
 padding: '10px',
 margin: '10px auto',
 boxSizing: 'border-box'
}}>

     <center>    
       
         <Form.Label ><u>Choose fields:</u></Form.Label>
                <br/>
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({chk: !this.state.chk})} 
              label='Check Box' 
              checked= {this.state.chk}
              />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({manufacture: !this.state.manufacture})} 
              label='Manufacturer'   
            checked= {this.state.manufacture}
            
            />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({Description: !this.state.Description})}
            label='Description' 
            checked= {this.state.Description}
             />
            <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({price: !this.state.price})} 
             label='Price'
            checked= {this.state.price}    />
                <Form.Check type='checkbox' 
            inline onChange = {(e) => this.setState({qty: !this.state.qty})} 
             label='Quantity'
            checked= {this.state.qty}    />

</center>
</div>


</div>
}


<MDBDataTableV5 hover

 entriesOptions={[5, 10, 20, 25, 50]} 
 entries={5} 
 pagesAmount={4} 
 data={data} 
 searchTop 
 searchBottom={false}     
        />


 
   <center> <Button disabled={!this.props.isAuthenticated} variant="primary" 
    onClick={() => this.props.history.push('/addproduct')}>Add Poduct</Button>  </center>



<View
        show={this.state.showModal}
        onHide={() => this.setState({showModal: false})}
      />

</center>
</React.Fragment>
  )
}
  

}
    



const mapstatetoprops = state => {

    return {
      viewreg: state.viewreg,
        products: state.products,
        isAuthenticated: state.isAuthenticated
    }
}
const mapdispatchtoprops = dispatch => {
return {

    onInit: ()=> dispatch(Action.Product_det()),
    onDel: (data) => dispatch(Action.onDel(data)),
    onLogout: () => dispatch(Action.onLogout()),
    Chart: (Product_name)  => dispatch(Action.Chart(Product_name))
}


}
export default connect(mapstatetoprops, mapdispatchtoprops)(ProductInventory)