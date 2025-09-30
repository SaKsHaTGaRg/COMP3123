const express = require('express');

const studentRouter = express.Router();

// Router Level Middleware
studentRouter.use((req, res, next) => {
    console.log("Student Router Middleware");
    next();
})

studentRouter.get('/', (req, res) => {
    res.send('<h1>Student Home Page</h1>');
});

studentRouter.post('/add', (req, res) => {
    res.send('<h1>Add Student Page</h1>');
});

studentRouter.put('/update', (req, res) => {
    res.send('<h1>Update Student Page</h1>');
});

studentRouter.delete('/delete', (req, res) => {
    res.send('<h1>Delete Student Page</h1>');
});

studentRouter.get('/error', (req, res) => {
    throw new Error("This is a forced error from Student Router.");
    res.send("This will not be executed.");
});

// Error Handling Middleware
studentRouter.use((err, req, res, next) => {
    //console.error(err.stack);
    console.log("Student Error Handling Middleware:", err.message);
    res.status(500).send('Something broke!');
});

module.exports = studentRouter;