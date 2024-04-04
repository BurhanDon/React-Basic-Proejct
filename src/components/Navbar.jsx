import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
          <ol>{props.link4}</ol>
          <ol>{props.link5}</ol>
        </ul>
        <button>Search</button>
      </nav>
    </div>
  );
}

export default Navbar;
