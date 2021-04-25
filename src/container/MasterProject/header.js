import React from 'react';
import './header.scss'


import {Link} from 'react-router-dom';


const Header = () => (

    <div className='header'>

<Link className='logo-container' to='/masterpro'>
<i  style={{color:'#2a8f91'}} className="fa fa-xing fa-3x" aria-hidden="true"></i>
</Link>

<div className='options'>
<Link className ='option' to ='/shop'>
SHOP

</Link>
<Link className ='option' to ='/shop'>
CONTACT

</Link>

</div>
    </div>
)

export default Header