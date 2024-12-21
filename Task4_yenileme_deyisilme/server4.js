// const express = require('express');
// const app = express();


// app.use(express.json());


// let users = [
//   { id: 1, name: 'Ali', position: 'Developer' },
//   { id: 2, name: 'Aysel', position: 'Designer' },
//   { id: 3, name: 'Murad', position: 'Manager' }
// ];


// app.put('/user/:id', (req, res) => {
//   const userId = parseInt(req.params.id); 
//   const userIndex = users.findIndex(user => user.id === userId);

//   if (userIndex !== -1) {
    
//     const updatedData = req.body;
//     users[userIndex] = { ...users[userIndex], ...updatedData };
//     res.status(200).json(users[userIndex]);
//   } else {

//     res.status(404).json({ message: 'İstifadəçi tapılmadı' });
//   }
// });

// app.delete('/user/:id', (req, res) => {
//     const userId = parseInt(req.params.id); 
//     const initialLength = users.length; 
  
//     users = users.filter(user => user.id !== userId);
  
//     if (users.length < initialLength) {

//       res.status(200).json({ message: 'İstifadəçi silindi' });
//     } else {
      
//       res.status(404).json({ message: 'İstifadəçi tapılmadı' });
//     }
//   });
  

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server ${PORT} portunda işə salındı.`);
// });


