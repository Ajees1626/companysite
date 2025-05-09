import React from "react";
import "./Abouthead.css";
import { FaChevronRight } from "react-icons/fa";

const Abouthead = () => {
  return (
    <div className="about-header">
      <h1>How did we start?</h1>
      <div className="breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <FaChevronRight className="breadcrumb-icon" />
        <span className="breadcrumb-item current">About us</span>
      </div>
    </div>
  );
};

export default Abouthead;
