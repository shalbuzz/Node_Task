// const express = require('express');
// const app = express();

// /*ozunen yazan*/
// // const products = [{
// //     id:1,
// //     name:"Iphone",
// //     cost:100,
// //     count:2
// // },
// //   {
// //     id:2,
// //     name:"Samsung",
// //     cost:200,
// //     count:3
// //   },
// //   {
// //     id:3,
// //     name:"Xiaomi",
// //     cost:300,
// //     count:24
// //   },

// //   {
// //     id:4,
// //     name:"Huawei",
// //     cost:500,
// //     count:214
// //   },

// //   {
// //     id:5,
// //     name:"Msi",
// //     cost:1120,
// //     count:45
// //   },

// //   {
// //     id:6,
// //     name:"Lenovo",
// //     cost:1400,
// //     count:244
// //   },

// //   {
// //     id:7,
// //     name:"I-Pad",
// //     cost:1000,
// //     count:260
// //   },

// //   {
// //     id:8,
// //     name:"Honor",
// //     cost:540,
// //     count:300
// //   },

// //   {
// //     id:9,
// //     name:"HP",
// //     cost:420,
// //     count:67
// //   },

// //   {
// //     id:10,
// //     name:"Mac",
// //     cost:1200,
// //     count:34
// //   },
// // ];



// /*funksiya random generate ucun*/
// function generateProducts() {
//   const products = [];
//   for (let i = 1; i <= 10; i++) {
//     products.push({
//       id: i,
//       name: `Məhsul ${i}`,
//       price: Math.floor(Math.random() * 100) + 1, 
//       quantity: Math.floor(Math.random() * 50) + 1, 
//     });
//   }
//   return products;
// }


// const products = generateProducts();

// app.get('/products',(req,res)=>{
//   let {offset = 0, limit = 7} = req.query;
//   offset = parseInt(offset);
//   limit = parseInt(limit);

//   const paginatedProducts = products.slice(offset,offset + limit);
//   res.json({
//     total:products.length,
//     offset,
//     limit,
//     data:paginatedProducts
//   })
// })
            

// app.get('/products/:id', function (req, res) {
//   const{id} =req.params;
//   const product = products.find((p)=>p.id === parseInt(id))

//   if(product){
//     res.json(product)
//   }
//   else{
//     res.status(404).json({message:'Mehsul tapilmadi'})
//   }
//   });

// const PORT = 3000;
//   app.listen(PORT, () => {
//     console.log(`Server ${PORT} portunda çalışır.`);
// });


