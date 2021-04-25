import React from 'react'

import MenuItem from './menu'
export default class Directory extends React.Component{

    state ={

        sections: 
        [{
            title:'SMARTPHONES',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8LG9d0e1XzH_j-wYM7bG8IgiD7_r_7oiDGQ&usqp=CAU',
            id:1
        },

        {
            title:'STATIONARY',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLSuB8fx9KArEXnIoymtaHhtUGSsZNQxpDFA&usqp=CAU',
            id:2
        },
        {
            title:'LAPTOPS',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyn6yoZnqfmp8_cBYdHJKlnOOmdPxIRebB_Q&usqp=CAU',
            id:3
        },

        {
            title:'VEHICLES',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx1ceYWId_dlmtuhg-Po0NP637UwWvjiZauA&usqp=CAU',
            id:4,
            size:'large'
        },

        {
            title:'OTHERS',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZ0gaF_xyRh40h1qit1Dwu8AFZ6dJUJgntMw&usqp=CAU',
            id:5,
            size:'large'
        }

        ]
    }
render()
{
    return(


    
<div className='directory-menu'>

{this.state.sections.map(section => 
    <MenuItem key={section.id} title={section.title} imgurl ={section.img} size={section.size}/>
    )}
</div>
    )

}
}