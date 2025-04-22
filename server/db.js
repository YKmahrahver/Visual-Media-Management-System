import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Yenie2828', 
  database: 'visualmedia_db'
});

export default db;