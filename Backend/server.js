const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());


const pool = new Pool({
    database: 'postgres', // The database name
    port: 5432,
    host: 'localhost',
    user: 'todo_user', // The user you created
    password: 'Ak47@kissu11@', // The user's password
  });



app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500);
        res.send('Server error');
    }
});


app.post('/tasks', async (req, res) => {
    const { title, description, stage } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, stage) VALUES ($1, $2, $3) RETURNING *',
            [title, description, stage]
        );
        res.status(201);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500);
        res.send('Server Error');
    }
});

app.post('/login',(req,res)=>{
    const userData=req.body;
    console.log("userData i reach to server and data is : ",userData);
    res.send();
})


app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { stage } = req.body;
    const taskId=parseInt(id);
    try {
        const result = await pool.query(
            'UPDATE tasks SET stage = $1 WHERE id = $2 RETURNING *',
            [stage, taskId]
        );
        if (result.rows.length === 0) {
            res.status(404);
            res.send('Task not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500);
        res.send('Server Error');
    }
});


app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            res.status(404);
            res.send('Task not found');
        }
        res.json({ message: 'Task deleted successfully', task: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500);
        res.send('Server Error');
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});






