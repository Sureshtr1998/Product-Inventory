import React from 'react';
import './coll_preview.scss'
import CollectioPreview from './innercoll'




const collpreview =(props)=>(
    
<div className='collection-preview'>

<h1 className='title'>{props.title.toUpperCase()}</h1>

<div className='preview'>

    {

        props.items
        .filter((item,index) => index < 4)
        .map(({id,...otherprops})  => (
            
            <CollectioPreview key={id} {...otherprops} />
        ))

    }


</div>
</div>

)

export default collpreview;