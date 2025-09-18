var http = require("http");
var os = require('os')

//TODO - Use Employee Module here -- DONE
const employees = require('./Employee')
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise -- DONE

//Define Server Port
const port = process.env.PORT || 8081
const SERVER_HOST = 'localhost';

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.statusCode = 200
            res.setHeader('Content-Type' , 'text/html')
            res.end('<h1>Welcome to Lab Exercise 03</h1>')
            return
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>" -- DONE
        }

        if (req.url === '/employee') {
            res.statusCode = 200
            res.setHeader('Content-Type' , 'application/json')
            employeeList = employees.getEmployees()
            res.end(JSON.stringify(employeeList))
            return 
            //TODO - Display all details for employees in JSON format -- DONE
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array -- DONE
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.statusCode = 200
            res.setHeader('Content-Type' , 'application/json')
            employeeName = employees.getEmployeesNames()
            res.end(JSON.stringify(employeeName))
            return 
        }

        if (req.url === '/employee/totalSalary') {
            //TODO - Display Sum of all employees salary in given JSON format  -- DONE
            //e.g. { "total_salary" : 100 }  
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const total = employees.totalSalary()
            res.end(JSON.stringify({ total_salary: total }));
            return;  
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening at http://${SERVER_HOST}:${port}/`);
})