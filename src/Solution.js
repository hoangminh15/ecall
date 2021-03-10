import {
  faCoffee,
  faDice,
  faIndustry,
  faParking,
  faStethoscope,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Solution.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import CasinoIcon from "@material-ui/icons/Casino";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { Restaurant } from "@material-ui/icons";

function Solution() {
  return (
    <div className="solution">
      <div className="solution__title">
        <span>GIẢI PHÁP</span>
      </div>
      <div className="solution__track">
        <div className="solution__item">
          <FontAwesomeIcon icon={faCoffee} className="solution__icon" />
          <p>QUÁN CAFE</p>
        </div>
        <div className="solution__item">
          <FontAwesomeIcon icon={faStethoscope} className="solution__icon" />
          <p>BỆNH VIỆN</p>
        </div>
        <div className="solution__item">
          <FontAwesomeIcon icon={faParking} className="solution__icon" />
          <p>BÃI ĐỖ XE</p>
        </div>
        <div className="solution__item">
          <FontAwesomeIcon icon={faIndustry} className="solution__icon" />
          <p>NHÀ MÁY</p>
        </div>
        <div className="solution__item">
          <FontAwesomeIcon icon={faDice} className="solution__icon" />
          <p>CASINO</p>
        </div>
        <div className="solution__item">
          <FontAwesomeIcon icon={faUtensils} className="solution__icon" />
          <p>RESTAURANT</p>
        </div>
      </div>
    </div>
  );
}

export default Solution;
