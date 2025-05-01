import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './config/db.js';
import authRoutes from './routes/authroute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());;

app.use('/api/auth', authRoutes);
app.use('/api/login', authRoutes);

db.query("SELECT 1") // Test the database connection
  .then(() => {
    console.log("Database connection successful.");
    app.listen(8081, () => {
      console.log('Server is running on port 8081');
    })
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
