import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewEntries() {
  const [entries, setEntries] = useState([]); // state for entries.

  // fetching entries from localstorage.
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || []; // update state from saved entries.
    setEntries(savedEntries);
  }, []);

  // handle delete entries.
  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index); // remove entries by index.
    setEntries(updatedEntries); // update state.
    localStorage.setItem("entries", JSON.stringify(updatedEntries)); // save updated entries to localstorage.
  };

  return (
    <div style={{ fontFamily: "cursive" }}>
      <center>
        <h2>Travel Entries</h2>{" "}
      </center>
      {entries.length === 0 ? ( // condition
        <center>
          <p>No entries found.</p>
        </center>
      ) : (
        <ul className="list-group">
          {entries.map((entry, index) => (
            <li key={index} className="list-group-item">
              <h5>{entry.title}</h5>
              <p>
                <strong>Location:</strong> {entry.location}
              </p>
              <p>
                <strong>Date:</strong> {entry.date}
              </p>
              <p>
                <strong>Description:</strong> {entry.description}
              </p>
              <div className="d-flex justify-content-between">
                <Link to={`/edit/${index}`} className="btn btn-warning">
                  Edit Entry
                </Link>
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-danger"
                >
                  Delete Entry
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewEntries;
