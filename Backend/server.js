const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db.js");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure transporter (Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ✅ POST route to save contact form data
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        //Save to Mysql database
        // const [result] = await pool.query(
        //     "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
        //     [name, email, subject, message]
        // );
        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `📩 New Contact Form Message: ${subject}`,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <small>Sent from your portfolio website</small>
      `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
        console.error("Error sending message:", err);
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
