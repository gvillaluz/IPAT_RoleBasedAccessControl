const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'user_information',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

db.getConnection((err) => {
    if (err) console.log("Can't Connect to Database.", err);
    else console.log("Connecting Database Successfully.");
});

app.post("/api/register", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) return res.status(400).json({ success: false, message: "All fields are required."});

    db.query('SELECT EXISTS(SELECT 1 FROM users WHERE email = ?) AS userExists', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database Error." });

        if (results[0].userExists === 1) return res.status(409).json({ success: false, message: "Email already in use." });

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err) => {
            if (err) res.status(500).json({ success: false, message: "Registration Failed." });

            return res.status(201).json({ success: true, message: "User Registered Successfully." });
        })
    })
});

app.post("/api/login", (req, res) => {
    const { email, password} = req.body;

    if (!email || !password) return res.status(400).json({ success: false, message: "All fields are required." });

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ success: false, message: "Database Error." });

        if (results.length === 0) return res.status(401).json({ success: false, message: "Invalid email or password." })
        
        const user = results[0];

        if (!await bcrypt.compare(password, user.password)) return res.status(401).json({ success: false, message: "Invalid email or password." })

        const token = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } 
        );

        return res.status(200).json({ success: true, message: "Login successful.", token })
    })
});

app.get("/api/user/tasks", (req, res) => {  
    const token = req.headers["authorization"].split(" ")[1];

    if (!token) return res.status(403).json({ success: false, message: "No token provided." })

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)

        db.query('SELECT * FROM tasks WHERE user_id = ?', [user.id], (err, tasks) => {
            if (err) return res.status(400).json({ success: false, message: "Database Error." });
            return res.status(200).json({ success: true, message: "Tasks loaded successfully.", tasks, user });
        });
    } catch (err) {
        return res.status(401).json({ success: false, message: "Token expired." })
    }
});

app.post("/api/user/addTask", (req, res) => {
    const { newTask, userId } = req.body;
    const token = req.headers["authorization"].split(" ")[1];

    if (!token) return res.status(403).json({ success: false, message: "No token provided." })

    try {
        db.query('INSERT INTO tasks (user_id, task) VALUES (?, ?)', [userId, newTask], (err, results) => {
            if (err) return res.status(400).json({ success: false, message: "Failed to save task." })

            const taskId = results.insertId;
            return res.status(200).json({ success: true, taskId, message: "Item added successfully." })
        });
    } catch (err) {
        return res.status(401).json({ success: false, message: "Server Error!" })
    }
});

app.listen(5000, () => {
    console.log("Server is running in port 5000.");
})