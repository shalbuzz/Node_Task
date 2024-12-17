// const express = require('express');
// const app = express();
// const port = 3000;



// app.use(express.json());

// const phonebook = [];

// app.post('/phonebook', (req,res)=>{
// const{name,phone} = req.body;

// if (!name || !phone) {
//     return res.status(400).json({ message: 'Ad və telefon nömrəsi tələb olunur.' });
//   }

//   const newRecord = {
//     id: phonebook.length + 1,
//     name,
//     phone
//   }
//  phonebook.push(newRecord);
//  res.status(201).json({ message: 'Qeyd uğurla əlavə olundu', record: newRecord });
// })
// app.get('/phonebook', (req,res)=>{
//     res.json({ total: phonebook.length, data: phonebook });
// })



// app.listen(port,()=>{
//     console.log(`Server ${port} portunda çalışır.`)
// })