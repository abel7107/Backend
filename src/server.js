import express from 'express';
import { config } from 'dotenv';
import { connectDB,disconnectDB  } from './config/db.js';

//import Routes
 import movieRoutes from './route/movieRoutes.js';

config();
connectDB();


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



//Handle unhandled promise rejections
process.on("unhandledRejection", async (err) => {
  console.error("Unhandled Rejection:",err);
  // Close server & exit process
  server.close(() => process.exit(1));
  await disconnectDB(); // Disconnect from the database before exiting
  process.exit(1); // Exit the process with an error code
});

//Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  // Close server & exit process
  server.close(() => process.exit(1));
  await disconnectDB(); // Disconnect from the database before exiting
  process.exit(1); // Exit the process with an error code
});

//Graceful shutdown SIGTERM and SIGINT
process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received: closing server");
  server.close(async () => {
    await disconnectDB(); // Disconnect from the database before exiting
    process.exit(0); // Exit the process gracefully
  });
});
