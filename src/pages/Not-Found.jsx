import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NotFound() {
  return (
    <div className="container-NotFound">
      <div className="left">
        <img src="./assets/image/notFound.png" alt="" width="300px" />
      </div>

      <div className="right">
        <h1 className="title-error">Oops!</h1>
        <h2 className="desc-error">
          Unfortunately, the page you were <br /> looking for could not be
          found.
        </h2>
        <Link className="Go-Home" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
