import express from 'express';
import mysql2 from 'mysql2/promise';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import db from './db.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());;


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});