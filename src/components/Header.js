import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="list-books-title">
    <h1>
      <Link to="/">
        <i
          className="far fa-sun fa-pulse"
          style={{
            fontSize: "2em",
            paddingLeft: "10px",
            paddingRight: "10px",
            position: "relative",
            top: "10px",
            color: "Tomato",
          }}
        />
      </Link>
      MyReads &nbsp;
      <i
        className="fas fa-book"
        style={{
          backgroundColor: "Black",
          color: "ForestGreen",
          borderRadius: "5px",
        }}
      />{" "}
    </h1>
  </div>
);
export default Header;
