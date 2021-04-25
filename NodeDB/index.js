const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const config = require('config');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;



app.use(express.json({extended: false}));

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(process.env.MONGO_URI, { useFindAndModify: false, useCreateIndex:true, useNewUrlParser: true , useUnifiedTopology: true  })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use('/', require('./routes/prodinv'));



//app.get('/', (req, res) => res.send('API Running Successfully'));

app.listen(port, ()=> console.log('Server running on port 5000'));