import React from "react";
import "./styles.scss";

const CustomButton = ({ loading, btnText, type = "submit", disabled = false, onClick, boxClass }) => {
  return (
    <div className="custom-btn">
      <button className={`omni-btn ${boxClass}`} type={type} disabled={disabled} onClick={onClick}>
        {btnText} {loading ? <div className="spinner"></div> : null}
      </button>
    </div>
  );
};

export default CustomButton;
