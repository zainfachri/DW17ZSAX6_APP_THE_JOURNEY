import React from "react";

import Jumbotron from "../Navbar/Jumbotron";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-top">
      <Jumbotron />
      <div classname="container">
        <div className="head">
          <h1 style={{ fontSize: 66 }}>
            The Journey <br /> your ever dreamed of.
          </h1>
        </div>
        <p style={{ fontSize: 24 }} className="sometext">
          We made a tool so you can easily keep & share your travel memories.{" "}
          <br />
          But there is a lot more
        </p>
      </div>
    </div>
  );
};
export default Header;
