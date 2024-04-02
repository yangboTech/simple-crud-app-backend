const express = require('express')
const mongoose = require('mongoose');
const app = express()

const Product = require('./models/product.model.js');
const productRoute = require('./routes/products.routes.js')
require('dotenv').config();

app.use(express.json());
//app.use(express.urlencoded({extended : false}));


//routes
app.use("/api/products",productRoute);

app.get('/', function (req, res) {
  res.send('Hello World, this is Yangbo')
})

// app.post('/api/products', async (req,res)=>{
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//        }
//        catch(error){
//         res.status(500).json({message:error.message});
//        }
// });

// app.get('/api/products',async (req,res)=>{

// })

// app.get('/api/products/:id',async (req,res)=>{

// })

// update a product

// app.put('/api/products/:id', async (req,res) => {

//     try{
//         const{id} = req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             res.status(404).json({message:'Product not found'});
//         }

//         const updatedProduct = await Product.findByIdAndUpdate(id);

//         res.status(200).json(updatedProduct);
//     }
//     catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

// Delete a product

// app.delete('/api/products/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
        
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(404).json({message:'Product not found!'})
//         }

//         res.status(200).json({message:`Product successfully deleted`})

//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// })

mongoose.connect(process.env.DB_URI)
  .then(() => {
  console.log('Connected!');
  app.listen(process.env.PORT,()=>{
    console.log(`app running on port ${process.env.PORT}`);
    })
})
  .catch(()=>{
    console.log('connection failed')
  });

