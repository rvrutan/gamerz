import express from 'express';
// import cors from 'cors';  // Add this import
import sequelize from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
// app.use(cors({
//   origin: [
//     'https://gamerz-client.onrender.com',
//     'http://localhost:3001',
//     'http://localhost:5173'  // Vite's default dev port
//   ],
//   credentials: true
// }));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});