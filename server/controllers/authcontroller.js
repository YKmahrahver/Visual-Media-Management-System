import db from '../config/db.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Received data:", req.body); // print to check if data is received correctly

  try {
    // Check if the user already exists
    const [existing] = await db.query('SELECT * FROM userdata WHERE email = ?', [email]);
    console.log("Existing user:", existing); // prints the existing user data
    
    if (existing.length > 0) {
      return res.status(400).json({ message: '⚠ Email already Registered' });
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

export const login = async (req, res) => {
  const {email, password} = req.body;
  console.log("Login attempt with email:", email); // Debugging log
  try{
    // Check if the user exists
    const [user] = await db.query('SELECT * FROM userdata WHERE email = ?', [email]);
    console.log("User found:", user); // prints the user data
    
    if (user.length === 0) {
      return res.status(400).json({ message: ' ⚠ Invalid email or password!' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user[0].password);
    console.log("Password match:", isMatch); // Debugging log

    if (!isMatch) {
      return res.status(400).json({ message: '⚠ Invalid email or password!' });
    }

    res.status(200).json({ message: 'Login successful' });
  }
  catch(error){
    console.error("Error during login:", error); // More specific error logging
    res.status(500).json({ message: 'Internal server error' });
  }

}
