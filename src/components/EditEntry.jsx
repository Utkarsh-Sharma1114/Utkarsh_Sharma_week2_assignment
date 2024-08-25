import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Extract the index from parameters
function EditEntry() {
  const { index } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const [entry, setEntry] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    // Fetch the entry data from localStorage .
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntry(entries[index]); // Set the entry data for the given index.
  }, [index]);

  const handleChange = (e) => {
    // Handle input changes and update the entry state.
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Handle form submission to update the entry in localStorage.
    e.preventDefault(); // prevent default from submit behaviour.
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries[index] = entry; // Update the specific entry.
    localStorage.setItem("entries", JSON.stringify(entries)); // Save updated entries back to localStorage.
    navigate("/view"); // Navigate to the view page after saving changes.
  };

  return (
    <div style={{ fontFamily: "cursive" }}>
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={entry.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={entry.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={entry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={entry.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEntry;
