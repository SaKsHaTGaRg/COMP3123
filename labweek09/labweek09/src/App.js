import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Using state to hold your info
  const [studentInfo] = useState({
    course: "Welcome to Fullstack Development - I",
    lab: "React JS Programming Week09 Lab exercise",
    studentId: "101516778", 
    name: "Sakshat Garg", 
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />

        <h1>{studentInfo.course}</h1>
        <h3>{studentInfo.lab}</h3>

        <p>Your Student ID: {studentInfo.studentId}</p>
        <p>Your Name: {studentInfo.name}</p>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
