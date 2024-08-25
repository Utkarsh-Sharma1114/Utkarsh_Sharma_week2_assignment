import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddEntry from "./components/AddEntry";
import ViewEntries from "./components/ViewEntries";
import EditEntry from "./components/EditEntry";
function App() {
  return (
    <div className="container mt-4">
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ fontFamily: "cursive" }}
          >
            Travel Journal
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add" href="#">
                  Add Entry
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view" href="#">
                  View Entries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<AddEntry></AddEntry>}></Route>
        <Route path="/view" element={<ViewEntries></ViewEntries>}></Route>
        <Route path="/edit/:index" element={<EditEntry></EditEntry>}></Route>
      </Routes>
    </div>
  );
}

export default App;
