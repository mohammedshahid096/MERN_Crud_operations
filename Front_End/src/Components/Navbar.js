import React from "react";
import { Link,NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="*">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link" >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to= "/adduser" className="nav-link" >
              Add User
            </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" >
              Pricing
            </a>
          </li> */}
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
