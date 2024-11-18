const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT role FROM admin WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) return res.status(500).json({ error: 'Database error' });
        if (results.length > 0) return res.json(results[0]);

        db.query('SELECT role, name, department, salary FROM manager WHERE email = ? AND password = ?', [email, password], (error, results) => {
            if (error) return res.status(500).json({ error: 'Database error' });
            if (results.length > 0) return res.json(results[0]);

            db.query('SELECT role,id FROM employee WHERE email = ? AND password = ?', [email, password], (error, results) => {
                if (error) return res.status(500).json({ error: 'Database error' });
                if (results.length > 0) return res.json(results[0]);
                return res.status(401).json({ error: 'Invalid credentials' });
            });
        });
    });
});

app.get('/employees/:managerName/:department', (req, res) => {
    const { managerName, department } = req.params;
    const sql = "SELECT * FROM employee WHERE reported = ? AND designation = ?";
    db.query(sql, [managerName, department], (err, data) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(data);
    });
});

app.post("/managerreg", (req, res) => {
    const { name, email, mobile, experience, joiningdate, department, password, role,salary } = req.body;
    const sql = "INSERT INTO manager (name, email, mobile, experience, joiningdate, department, password, role,salary) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?)";
    db.query(sql, [name, email, mobile, experience, joiningdate, department, password, role,salary], (err) => {
        if (err) return res.status(500).json({ error: "Database error" });
        return res.status(200).json({ message: "Data uploaded" });
    });
});

app.post("/employeereg", (req, res) => {
    const {  name, email, mobile, designation, reported, joiningdate, password, role,salary } = req.body;
    const sql = "INSERT INTO employee ( name, email, mobile, designation, reported, joiningdate, password, role,salary) VALUES (?,?,?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [no, name, email, mobile, designation, reported, joiningdate, password, role,salary], (err) => {
        if (err) return res.status(500).json({ message: "Database error" });
        return res.status(200).json({ message: "Data uploaded" });
    });
});

app.get('/admin', (req, res) => {
    const sql = "SELECT * FROM admin";
    db.query(sql, (err, data) => {
       if (err) return res.status(500).json({ error: "Database error" });
       res.json(data);
    });
 });
 app.get('/managerd', (req, res) => {
    const sql = "SELECT * FROM manager"; // Make sure to only select the fields you need
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(data);
    });
});

 
 app.put("/admin/:id", (req, res) => {
    const { name, email, password } = req.body;
    const id = req.params.id;
    const sql = "UPDATE admin SET name=?, email=?, password=? WHERE id=?";
    db.query(sql, [name, email, password, id], (err, result) => {
       if (err) {
          console.log(err);
          return res.status(500).json({ error: "Database error" });
       }
       res.json({ message: 'updated' });
    });
 });

 app.get('/employee',(req,res) => {
    const sql = "SELECT * FROM employee"
    db.query(sql,(err,data) => {
        if(err){
            return res.json({error:'database error'});

        }else{
            return res.json(data)
        }
    })
 })

 app.get('/employe/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(data);
    });
});

app.listen(3011, () => {
    console.log('Listening on port 3011');
});
