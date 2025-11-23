import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#6d4c41", padding: "10px", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "white" }}>
        About us
      </Link>
    </nav>
  );
}

export default Navbar;
