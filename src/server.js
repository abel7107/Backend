import express from 'express';

//import Routes
 import movieRoutes from './route/movieRoutes.js';


const app = express();

//API Routes
app.use('/movies', movieRoutes);

 
  app.get('/hello', (req, res) => {
   res.json({ message: 'Hello, World!' });
 });
  
 const PORT =5002;


 const server = app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });



 //http://localhost:5002/hello