const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({


    Product_name:{
        type: String

    },

    Manufacturer :{
        type: String

    },
    Price:{
        type: String

    },
    Quantity :{
        type: String

    },
    Product_description :{
        type: String

    },
    Date :{
        type: String

    },
    Count :{
        type: Number

    },
    
    id :{
        type: Number

    }

})


module.exports = products = mongoose.model('products', ProductSchema);