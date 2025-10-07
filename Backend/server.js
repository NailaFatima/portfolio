const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ POST route to save contact form data
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const [result] = await pool.query(
            "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
            [name, email, subject, message]
        );
        res.status(201).json({ success: true, message: "Message saved successfully" });
    } catch (err) {
        console.error("Error saving message:", err);
        res.status(500).json({ error: "Database error" });
    }
});

// ✅ Optional: GET route to view all messages
app.get("/api/contact", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM contact_messages ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
