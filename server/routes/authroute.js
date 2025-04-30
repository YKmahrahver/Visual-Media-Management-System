import express from 'express';
import { register } from '../controllers/authcontroller.js';  // Ensure path is correct

const router = express.Router();

// Define the POST route for '/signup' that runs the register function
router.post('/signup', register);

// Export the router so server.js can use it
export default router;
