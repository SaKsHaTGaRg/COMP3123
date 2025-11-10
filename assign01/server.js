
const express = require("express");
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();  
 
const app = express();
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB connected"))
    .catch(err=> console.log(err));

//test 
app.get("/", (req, res) => {
    res.json({ message: "hey sakshat, im working" });
});

//start server
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//routes

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/employee", require("./routes/employeeRoutes"));