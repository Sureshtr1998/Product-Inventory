const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const nodemailer = require('nodemailer');
const multer = require('multer')
const Products = require('../Models/Products')
const Register = require('../Models/Userdetails')
const Feedback = require('../Models/Feedback')

const auth = require('../Middleware_decoder');
const { default: Axios } = require('axios');


const prod = express();



prod.use(cors());


prod.post('/products',auth,  (req, res) => {
 

const products = {


    Product_name: req.body.Product_name,
    Manufacturer: req.body.Manufacturer,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Product_description: req.body.Product_description,
    Date: req.body.Date,
    Count: req.body.Count

   

}

Products.create(products)
.then((det) => {
    res.json(det)


})
        })


prod.get('/products', (req,res) => {
    Products.find()
    .then(prod => {
        res.send(prod)
    })
    .catch(err => {

        res.send('error' + err)
    })



})



prod.post('/products/:id', auth, (req,res) => {
Id = req.params.id

Products.findById(Id)
.then(det =>
    {
    res.send(det)
    
        const products = {
...det,
Count: det.Count+1
           
        }  
      Products.updateOne({_id: det._id},{Count: det.Count + 1})
      .then(det => console.log(det))
      .catch(err => res.status(404).send("Check"))
      
        //  Products.create(products)      

    })

})


prod.delete('/products/:id',auth, (req, res)=>{

ID = req.params.id

Products.findByIdAndDelete(ID)
.then(det => res.send("Deleted"))
.catch(err => res.status(400).send("Not present"))

})


prod.post('/register', (req, res) => {

// Using headers is mandatory or else it won't work

Register.findOne({EmailID: req.body.EmailID})

.then(user => {
    console.log(user)
if(user === null )
{
    console.log("IT should be null")

    const details = {
    
            EmailID: req.body.EmailID,
            Password: req.body.Password,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Location: req.body.Location,
            MobileNumber: req.body.MobileNumber,
            Date: req.body.Date     
    }

   bcrypt.hash(req.body.Password,9, (err, hash) => {
    details.Password = hash
     Register.create(details)
     .then(det =>res.send(det) )
    .catch(err => console.log("Error"))
   })
   
}

else {
    console.log("Else Part")
res.send('User Already exists')
}
 
})
    // Better use SendGrid for mails

})


prod.put('/products/:id',auth, (req,res)=>{
ID = req.params.id

console.log(req.body)
Products.updateOne({_id: ID},{
    Product_name: req.body.Product_name,
    Manufacturer: req.body.Manufacturer,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Product_description: req.body.Product_description


}) 
.then(det => res.send(det))
.catch(err => console.log("Check it"))




})


// Deleting the user

prod.delete('/delete/:id', (req,res) => {

const Email = req.params.id

Register.deleteOne({EmailID: Email})
.then(() => res.send("success"))
.catch((err) => res.send(err))
})


prod.get('/register/:id/:test', (req, res) => {

const Email = req.params.id
const oops = req.params.test



console.log(Email)
console.log(oops)


 Register.findOne({EmailID: Email})

 .then(det => res.send(det))
 .catch(err => console.log(err))
    
 })

  

prod.post('/feedback', (req,res) => {


    const feedback = {

        comments: req.body.comments
    }

    Feedback.create(feedback)
    .then(comm => {
        res.send(comm)
    })
})



prod.get('/feedback', (req,res) => {

    Feedback.find()
    .then(feed => {
        res.send(feed)
    })
    .catch(err => {

        res.send('error' + err)
    })



})





prod.post('/login', (req, res) => {

    Register.findOne({EmailID: req.body.EmailID})
    .then(user => {
console.log(user)
      //  if(user.Password === req.body.Password)
      if(user){
      if(bcrypt.compareSync(req.body.Password, user.Password))
      {
  

        const payload = {
            _id: user._id,
            EmailID: user.EmailID


        }

        let token = jwt.sign(payload, 'This secret key can be used in Config', {

            expiresIn: 1440
        })

        const info ={
            EmailID: user.EmailID,
            token,
            Firstname: user.Firstname,
            Lastname: user.Lastname,
            Location: user.Location,
            MobileNumber: user.MobileNumber,
            Date: user.Date  

        }

        res.send(info)
    }
      

          
     else
     { 
         res.status(400).send('Password mismatch')
}     
        
      }

      else{

        res.status(400).send("User doesn't exist")
      }
    })
    .catch(err => res.send(err))

})

//Token checking
prod.get('/check', auth,  (req,res) => {


    Products.find()
    .then(prod => {
        res.send(prod)
    })
    .catch(err => res.send("error"))
})

       
//Node Session


prod.get('/test', (req,res) => {

//http://localhost:5000/prodinv/test?search=working&rating=4
    console.log(req.query)

    //this will print { search: 'working', rating: '4' }
     res.send({
         name:"Hi"})
})

// Async and Await instead of then and catch

prod.get('/test2', async (req,res) => {


 const prodall =   await Products.find()
    
   res.send(prodall)

})

// File Uploading

const upload = multer({
    limits: {
        fileSize: 1000000 //1Mb

    },
    fileFilter(req,file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/)){

            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})



prod.post ('/allup', upload.single('files'), async(req,res) => {
//req.Register.files = req.file.buffer



await Register.create({files: req.file.buffer})
res.send("Success")
},
(err, req, res, next) => {

    res.send({error: "Error"})
})


prod.get('/allup',async (req,res) => {
const pic = await Register.findById("5f4a64f614de465ed09e9959")
    res.set('Content-Type', 'image/jpg')
   // console.log(pic.files)
    res.send(pic.files)

})


prod.get('/allups', (req,res) => {

  res.send("hello")

})

// if(process.env.NODE_ENV === 'production') {
   // prod.get('*',(req,res) => res.sendFile(path.resolve(path.resolve(),'build','index.html')))
// }
// else {  
//     prod.get('/', (req, res) =>{
//         res.send("API is running")
//     })
// }



module.exports = prod;