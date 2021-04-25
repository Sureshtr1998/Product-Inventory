import React from 'react'
import COLLECTION_DATA from './Collectiondata'
import CollectionPreview from './coll_preview'
import HeaderMaster from './header'

export default class Shoppage extends React.Component{


    state = {
        collections: COLLECTION_DATA
    }

    render(){

        return(

            <div>
                <HeaderMaster/>
               {
this.state.collections.map(({id, ...otherprops}) => 
    <CollectionPreview key={id} {...otherprops}/>
    )
               }
            </div>
        )
    }
}