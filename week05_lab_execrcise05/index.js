const express = require('express');
const path = require('path'); // <-- needed for path.join
const app = express();

// Import user routes
const userRouter = require('./routes/users');

const SERVER_PORT = process.env.PORT || 8080;

// Middleware to parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount User Router
app.use('/api/v1/user', userRouter);

// Serve home.html at /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // log the error
  res.status(500).send('Server Error');
});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log(`✅ Web Server is listening at http://localhost:${SERVER_PORT}`);
});
