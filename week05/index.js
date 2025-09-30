const express = require('express');
const studentRouter = require('./routers/student');
const employeeRouter = require('./routers/employee');

const app = express();
const SERVER_PORT = process.env.POST || 3000;

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Level Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
})

app.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
})

// Student and Employee Routers
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/employee", employeeRouter);

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// Route to test error handling middleware
// http://localhost:3000/error
app.get("/error", (req, res) => {
    //res.send("Before error");
    throw new Error("This is a forced error.");
    res.send("This will not be executed.");
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    //console.error(err.stack);
    console.log("Error Handling Middleware:", err.message);
    res.status(500).send('Something broke!');
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});