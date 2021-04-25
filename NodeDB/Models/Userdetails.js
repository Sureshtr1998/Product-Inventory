const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RegisterSchema = new Schema ({

    EmailID:{
        type: String

    },
      Password:{
        type: String
       // required: true


    },
      Firstname:{
        type: String

    },
      Lastname:{
        type: String

    },
      Location :{
        type: String

    },

    files: {
      type: Buffer
    },
    
      MobileNumber:{
        type: String,
        

// You can use lowercase, unique as true , trim , minlength  and many more

// You can use validator(npm i ) to validate email, phone etc etc
// No need to mention else part
        validate(value){
          if(value.length !== 10)
{

  throw new Error("It should be 10 digits")
}        }

    },
      Date:{
        type: String

    }


})

module.exports = register = mongoose.model('register',RegisterSchema )