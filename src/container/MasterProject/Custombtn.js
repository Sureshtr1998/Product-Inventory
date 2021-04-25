import React from 'react'
import './Custombtn.scss'

const CustomBtn =(props) =>(

    <button className='custom-button'>
        {props.children}
    </button>
)

export default CustomBtn