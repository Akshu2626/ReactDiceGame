import React from "react";

const PointBox = ({ random, isSelected }) => {
  console.log(random);
  return (
    <div
      className="pointBox dice"
      style={{ animation: isSelected === true ? "roll .6s linear" : "" }}
    >
      {random}
    </div>
  );
};

export default PointBox;
