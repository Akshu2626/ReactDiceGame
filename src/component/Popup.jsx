import React from "react";

const Popup = ({ capturePhoto, canvasRef, flag, videoRef }) => {
  return (
    <div
      className="popup"
      style={{ display: `${flag === true ? "block" : "none"}` }}
    >
      <video
        className="popup-video"
        ref={videoRef}
        autoPlay
        style={{ display: "block", margin: "10px 0" }}
      ></video>

      <button className="caputepic" onClick={capturePhoto}>
        Send Pic
      </button>

      <canvas
        style={{ display: "none" }}
        ref={canvasRef}
        width="540"
        height="480"
      />
    </div>
  );
};

export default Popup;
