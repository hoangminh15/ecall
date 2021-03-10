import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <div className="solution">
      <div className="solution__title">
          <span>GIẢI PHÁP</span>
      </div>
      <div className="solution__track">
        <div className="solution__item">
          <i class="fas fa-parking"></i>
          <p>Parking lot</p>
        </div>
        <div className="solution__item">
          <i class="fas fa-stethoscope"></i>
          <p>Hospital</p>
        </div>
        <div className="solution__item">
          <i class="fas fa-parking"></i>
          <p>Parking lot</p>
        </div>
        <div className="solution__item">
          <i class="fas fa-parking"></i>
          <p>Parking lot</p>
        </div>
      </div>
    </div>
  );
}

export default Solution;
