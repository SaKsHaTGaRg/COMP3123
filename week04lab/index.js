// 101516778 Sakshat Garg
// COMP3123 Full Stack Web Development
// Lab 4 - Express JS

const express = require("express");

const SERVER_PORT = process.env.PORT || 3000;
const app = express();

app.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
});

app.use(express.json());
//http://localhost:3000/

//http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

// query parameters
//http://localhost:3000/user?firstname=Sakshat&lastname=garg
app.get("/user", (req,res) => {
    if(req.query == {} || !req.query.firstname || !req.query.lastname){
        return res.status(400).json({ error: "Missing query parameters" });
    } 
    
    console.log(req.query);
    const fname = req.query.firstname;
    const lname = req.query.lastname;
    res.json({
        firstname: fname,
        lastname: lname
    })
})


// path parameters
//http://localhost:3000/user/Sakshat/Garg
app.post("/user/:firstname/:lastname", (req,res) => {

    if(!req.params.firstname || !req.params.lastname || req.params == {}){
        return res.status(400).json({ error: "Missing path parameters" });
    }

    console.log(req.params);
    const fname = req.params.firstname;
    const lname = req.params.lastname;
    res.json({
        firstname: fname,
        lastname: lname
    }) 
})


//Body Parameters 
//http://localhost:3000/users
app.post("/users", (req, res) => {
    const users = req.body; // Expecting an array of user objects

    // Validate
    if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ error: "Missing or empty body array" });
    }

    
    console.log(users);
    res.json(users); // Echo back the array
});

