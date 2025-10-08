const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

// MongoDB Atlas connection
const DB_URL = process.env.DB_URL || "mongodb+srv://admin:admin01@nodecluster.ujtvjxm.mongodb.net/test?retryWrites=true&w=majority&appName=NodeCluster";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note Taking Application - Week06 Exercise</h1>");
});

// Use the note routes
app.use('/api', noteRoutes);

// Connect to MongoDB Atlas and start server
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas");
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`➡️  http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("❌ Could not connect to the database:", err);
    process.exit();
});
