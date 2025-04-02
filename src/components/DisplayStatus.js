import React from "react";
import "../styles/DisplayStatus.css";

const DisplayStatus = ({ type, message }) => {
  return (
    <div className={`status-message ${type}`}>
      {message}
    </div>
  );
};

export default DisplayStatus;