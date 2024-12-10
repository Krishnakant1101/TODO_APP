const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration
const pool = new Pool({
    database: 'todo_app',
    port: 5432,
    host: 'localhost',
    user: 'todo_user',
    password: 'Ak47@kissu11@',
});

// Secret key for JWT (use an environment variable in production)
const JWT_SECRET = process.env.JWT_SECRET || 'Ak47@kissu11@';

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ success: false, message: 'Access token missing' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Routes
app.get('/tasks', authenticateToken, async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/tasks', authenticateToken, async (req, res) => {
    const { title, description, stage } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, stage) VALUES ($1, $2, $3) RETURNING *',
            [title, description, stage]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const email = username; // Assuming the 'username' in the frontend is actually the email
console.log(req.body);
        // Query to find the user
        const query = 'SELECT email, password FROM userdata WHERE email = $1';
        const result = await pool.query(query, [email]);
   
        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const user = result.rows[0];
        console.log(user)

        // Verify password
       
        if (user.password!==password) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign({ username: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error.stack);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
});


app.post('/SignupPage', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const second = lastname;

    try {
        // Check if user already exists
        const existingUser = await pool.query('SELECT * FROM userdata WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        // Hash the password
       

        // Insert the user into the database with the hashed password
        const result = await pool.query(
            'INSERT INTO userdata (firstname, second, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [firstname, second, email, password]
        );

        res.status(201).json({ message: 'User created successfully!', user: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});


app.put('/tasks/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { stage } = req.body;
    const taskId = parseInt(id);
    try {
        const result = await pool.query(
            'UPDATE tasks SET stage = $1 WHERE id = $2 RETURNING *',
            [stage, taskId]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Task not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.delete('/tasks/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Task not found');
        }
        res.json({ message: 'Task deleted successfully', task: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
