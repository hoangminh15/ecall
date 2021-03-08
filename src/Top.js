import React from "react";
import "./Top.css";
import HeadsetIcon from "@material-ui/icons/Headset";
import { IconButton } from "@material-ui/core";

function Top() {
  return (
    <div className="top">
      <div className="top__left">
        <HeadsetIcon className="headset__icon"/>
        <span className="hotline__text">Hotline:</span>
        <span className="hotline__number">0982.703.283</span>
      </div>
      <div className="top__right">
        <div className="logIn__signUp">
          <span>ĐĂNG NHẬP</span>
          <span>|</span>
          <span>ĐĂNG KÝ</span>
        </div>
        <div className="flags">
          <input className="flag" type="image" src="./vn.svg" alt="" style={{"width": "30px"}}/>
          <input className="flag" type="image" src="./gb.svg" alt="" style={{"width": "30px"}}/>
        </div>
      </div>
    </div>
  );
}

export default Top;
