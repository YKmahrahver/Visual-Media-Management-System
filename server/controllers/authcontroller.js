import db from '../config/db.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Received data:", req.body); // Debugging log

  try {
    // Check if the user already exists
    const [existing] = await db.query('SELECT * FROM userdata WHERE email = ?', [email]);
    console.log("Existing user:", existing); // Debugging log
    
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email already Registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword); // Debugging log

    // Insert the new user into the database
    await db.execute(
      'INSERT INTO userdata (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during registration:", error); // More specific error logging
    res.status(500).json({ message: 'Internal server error' });
  }
};
