import React from 'react';
import './CustBtn.css'; // Import the CSS file

const CustBtn = ({ text, className, onClick, type = "button", disabled = false }) => {
  return (
    <button className={`${className}`} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustBtn;
