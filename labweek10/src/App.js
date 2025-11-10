import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree) {
      setSubmitted(true);
    } else {
      alert("Please agree to the terms and conditions!");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", border: "2px solid #ccc", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ flex: 1 }}
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{ flex: 1 }}
          />
        </div>

        <input
          type="text"
          name="address1"
          placeholder="Address"
          value={formData.address1}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="address2"
          placeholder="Address 2"
          value={formData.address2}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            style={{ flex: 1 }}
          />

          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
            style={{ flex: 1 }}
          >
            <option value="">Choose...</option>
            <option>Alberta</option>
            <option>British Columbia</option>
            <option>Manitoba</option>
            <option>New Brunswick</option>
            <option>Newfoundland and Labrador</option>
            <option>Nova Scotia</option>
            <option>Ontario</option>
            <option>Prince Edward Island</option>
            <option>Quebec</option>
            <option>Saskatchewan</option>
          </select>

          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
            style={{ flex: 1 }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />{" "}
          Agree Terms & Condition?
        </div>

        <button
          type="submit"
          style={{
            display: "block",
            margin: "0 auto",
            backgroundColor: "green",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div
          style={{
            border: "2px solid green",
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f9fff9",
          }}
        >
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Full Name:</strong> {formData.fullName}
          </p>
          <p>
            <strong>Address:</strong> {formData.address1}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>Province:</strong> {formData.province}
          </p>
          <p>
            <strong>Postal Code:</strong> {formData.postalCode}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
