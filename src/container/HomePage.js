import React, { Component, lazy,  Suspense } from 'react'
import {NavLink, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import swal from 'sweetalert'
import {Nav, Navbar} from 'react-bootstrap'
import PI from './MasterProject/index'
// import Route from 'react-router-hooks'
// import HeaderMaster from './MasterProject/header'
//Master Project

import Shop from './MasterProject/shop'

  const productInventory = lazy(() => import ('./NavContainer/ProductInventory'));
  const Home = lazy(() => import ('./NavContainer/Home'));
  const Login = lazy(() => import ('./NavContainer/Login'));
  const Edit = lazy(() => import ('./NavContainer/EditProduct'));
  const AddProduct = lazy(() => import ('./NavContainer/AddProduct'));
  // const FileUpandview = lazy(() => import ('../container/FileUpload/Fileup'));

  const Chart = lazy(() => import ('./NavContainer/Chart'));
  const Feedback = lazy(() => import ('./NavContainer/Feedback'));



export default class  HomePage extends Component {



    render() {
       // const TestRout=() =>()


        return (



<React.Fragment>  
<Router>
{/* <Table striped bordered hover >  */}

 

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand  > <NavLink to ='/' style={{  textDecoration: 'none', color:'white', paddingTop:'10px'}} 
  
  >  Home </NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="mr-auto">
  <NavLink to ='/product_Inventory' style={{  textDecoration: 'none',color: '#ffffff', padding:'6px'  }} >Product Inventory</NavLink>
      
  <NavLink to ='/feedback' style={{  textDecoration: 'none',color: '#ffffff', padding:'6px' }} >Feedback</NavLink>
  
  
  <NavLink to ='/masterpro' style={{  textDecoration: 'none',color: '#ffffff', padding:'6px' }} >Master Project</NavLink>

     
      
    </Nav>




    <Nav>
       {/* <NavLink to ='/About' style={{  textDecoration: 'none',color: '#ffffff', padding:'8px' }} >About</NavLink> */}

       <p onClick={() => 
      swal("About Product Inventory!", "This website is made for those users who're struggling to manage the products, here users can easily Add, View, Edit Delete Products and Many more. \n \n It's easy to get the customers valuable feedback also in this app along with that it's easy to get customers interest by looking at the graph, which will show top viewed products by the customer.\n \n There are many additional advantages, Register now!! to see some of the awesome feautures")
      
      } style={{ cursor:'pointer', textDecoration: 'none',color: '#ffffff', paddingTop:'8px', paddingRight:'18px', paddingLeft:'6px' }} >About</p>
     




    
      <p onClick={() => 
      swal("Contact Us!", "Name: Suresh T R \n\n  Bengaluru - 560 085, India \n\n  Ph: +91 9632972404 \n\n  Email Id: sureshtr22i0@gmail.com \n \n Linked In: suresh-tr-15b729147")
      
      } style={{  cursor:'pointer', textDecoration: 'none',color: '#ffffff', paddingTop:'8px', paddingLeft:'5px', paddingRight:'5px'  }} >Contact Us</p>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>





  
  

<Suspense fallback={<p>Loading....</p>}>
<Switch>

<Route path="/product_Inventory/edit" component={Edit} exact/>

<Route path="/graph" component={Chart} exact/>
<Route path="/product_Inventory" component={productInventory}/>
<Route path="/feedback" component={Feedback}/>
{/* <Route path="/fileup" component={FileUpandview}/> */}


<Route path="/masterpro" component={PI} exact/>
<Route path="/shop" component={Shop} exact/>


<Route path="/login" component={Login} />
<Route path="/addproduct" component={AddProduct}/>
{/* <Route path="/Home" component={Home} exact/> */}
<Route path="/" component={Home} exact/>




</Switch>
</Suspense>



{/* </Table> */}



    </Router>

 





</React.Fragment>
        )
    }
};

