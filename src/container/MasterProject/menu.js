import React from 'react'


const menu = (props) => (


<div className={`${props.size} menu-item`}>


    <div className='background-image' style={{
backgroundImage: `url(${props.imgurl})`
    }}/>
    <div className='content'>
<h1 className='title'> {props.title}</h1>
        <span className='subtitle'> SHOP NOW</span>
    </div>
</div>
);


export default menu;