import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="f1">ECALL NHÀ PHÂN PHỐI CHUÔNG GỌI PHỤC VỤ</div>
        <div className="f2">LIÊN HỆ</div>
        <div className="f3">Giới thiệu Ecall.vn</div>
        <div className="f4">Trụ sở chính Hà Nội:</div>
        <div className="f5">Hai Bà Trưng, Hà Nội</div>
        <div className="f6">Chúng tôi luôn tìm kiếm nhân tài</div>
        <div className="f7">ecall@gmail.com</div>
        <div className="f8">+84 982 703 283</div>
        <div className="f9">ecall@gmail.vn</div>
      </div>
    </div>
  );
}

export default Footer;
