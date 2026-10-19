import express from 'express';
 const app = express();
 
 
  app.get('/hello', (req, res) => {
   res.json({ message: 'Hello, World!' });
 });
  
 const PORT =5002;


 const server = app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });



 //http://localhost:5002/hello