import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h6
        style={{ color: "#006a6a", fontSize: "1.2rem" }}
        className="mt-5 mb-4"
      >
        Oopss..! Page Not Found..
      </h6>
      <i
        style={{ color: "#006a6a" }}
        className="fas fa-solid fa-triangle-exclamation fa-10x"
      ></i>
      <br />
      <Link
        style={{ color: "#fbf8f3", backgroundColor: "#006a6a", width: "170px" }}
        className="btn btn-outline mt-5 "
        to="/firebase-authentication"
      >
        <i className="fas fa-regular fa-circle-left me-2"></i>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
