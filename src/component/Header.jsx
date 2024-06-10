import React from "react";

const Header = ({ total,imagePath }) => {
  return (
    <div className="header">
      <div className="head-avatar">
        <img
          src="https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png"
          alt=""
        />
      </div>
      <input
        type="text"
        className="point-input"
        disabled
        autoFocus={true}
        value={total}
      />
    </div>
  );
};

export default Header;
