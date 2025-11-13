import React, { Component } from "react";
import axios from "axios";

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-3">Random Users</h2>

        {this.state.persons.map((person, index) => (
          <div key={index} className="p-3 mb-3 border rounded">
            <h5>{person.name.first} {person.name.last}</h5>
            <p>Email: {person.email}</p>
            <img src={person.picture.medium} alt="" />
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
