const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const productRoutes = require('./routes/productRoutes');
var cors = require('cors')
require('dotenv').config();


const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.use(cors()) 

app.use('/products', productRoutes);



const mongodbUrl = process.env.MONGODB_URL;

mongoose.set("strictQuery", false)
mongoose.
connect(mongodbUrl)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})

