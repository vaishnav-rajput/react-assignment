import React from 'react';
import './CustBtn.css'; // Import the CSS file

const CustBtn = ({ text, onClick, type = "button", disabled = false }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustBtn;
