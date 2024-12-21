
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
app.use(express.json());
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'archive'
});
connection.connect((err) => {
  if (!err) { 
    console.log("SUCCESS");
  }else{
    console.log(err)
  }
});
  
connection.query('SELECT * FROM ALBUMS', 
    (err, data) => {
      if (!err) {
        console.log(data);
      } else {
        console.log(err);
      }
    });

    app.get('/client', (req, res) => {
        connection.query('SELECT * FROM ALBUMS', 
          (err, data) => {
            if (err) return res.status(500).json({ error: "Error" });
            res.json(data);
           
          });
      });
      
      app.post('/client', (req, res) => {
       
        const { albumId } = req.body;
      
        
        if (!albumId) {
          return res.status(400).json({ error: 'Album ID is required' });
        }
      
      
        connection.query(
          'SELECT * FROM ALBUMS WHERE id = ?', 
          [albumId], 
          (err, data) => {
            if (err) {
              console.error('Ошибка выполнения запроса:', err);
              return res.status(500).json({ error: 'Error' });
            }
            res.json(data);
          }
        );
      });
      app.put('/client/:id',(req,res)=>{

        const {id} = req.params;
        const newField = req.body.newField;
        if(!newField){
            return res.status(400).json({error:"Wrong"})
        }
        connection.query(
            'UPDATE ALBUMS SET album = ? WHERE id = ?',
            [newField, id],
            (err, result) => {
              if (err) {
                return res.status(500).json({ error: 'Wrong request to DB' });
              }
        
              
              if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'ID not found' });
              }
        
           
              res.json({ message: 'Updated'});
              
            }
          );
      });

      app.delete('/client/:id', (req,res)=>{
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
          return res.status(400).json({ error: 'Invalid ID format' });
        }
    
      connection.query(
        'DELETE FROM ALBUMS WHERE id = ?',
        [id],
        (err,result)=>{
            if(err){
                return res.status(500).json({error:'ID not found'})
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'ID not found' });
              }
        
              res.json({message:'DELETED'});
           
        }

      )
       
      });

      connection.query(`
        INSERT INTO albums (album, year, band_id)
        VALUES
          ('Lana', 1000, 1),
          ('Alex', 4000,  7);
      `, 
      (err, data) => {
        if (!err) {
          console.log(data);
        }
      });
      

    
      app.listen(port,()=>{
        console.log(`Server ${port} portunda işə salındı.`)
      });