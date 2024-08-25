import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEntry() {
  const [title, setTitle] = useState(""); // State for title.
  const [location, setLocation] = useState(""); // State for location.
  const [date, setDate] = useState(""); // State for date.
  const [description, setDescription] = useState(""); // State for description.
  const navigate = useNavigate(); // Hook for navigate.

  // handle on submit:
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default from behaviour.
    const newEntry = { title, location, date, description }; // Create new object.
    const entries = JSON.parse(localStorage.getItem("entries")) || []; // retrieve existing entries.
    entries.push(newEntry); // Add new entry to array.
    localStorage.setItem("entries", JSON.stringify(entries)); // save entries to local storage.
    navigate("/view");
  };

  return (
    <div style={{ fontFamily: "cursive" }}>
      <h2>Add New Travel Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // update title state.
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // update location state.
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)} // update date state.
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // update description state.
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Add Entry
        </button>
      </form>
    </div>
  );
}

export default AddEntry;
