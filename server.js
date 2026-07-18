const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "transportation_management"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

app.post("/book", (req, res) => {
    const {
        payment_type,
        sender_name,
        receiver_name,
        charges
    } = req.body;

    const sql =
        "INSERT INTO book (payment_type, sender_name, receiver_name, charges) VALUES (?, ?, ?, ?)";

    db.query(sql,
        [payment_type, sender_name, receiver_name, charges],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send("Record saved successfully");
            }
        });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});