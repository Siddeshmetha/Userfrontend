import React from "react";
import "./Notfound.css"; 
import CustomNavbar from "./CustomNavbar";

const NotFound = () => {
  return (
    <>
    <CustomNavbar/>
    <div className="not-found-container">
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
    </>
  );
};

export default NotFound;
