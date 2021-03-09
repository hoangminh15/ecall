import React, { useCallback, useEffect } from "react";
import "./Slide.css";

function Slide() {
  var slideIndex = 1;

  const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  useEffect(() => {
      showSlides(slideIndex);
  })

  const plusSlides = (event, n) => {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  const currentSlide = (event, n) => {
    showSlides((slideIndex = n));
  }

  return (
    <div className="slide">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="./1.jpg" style={{ width: "100%" }} alt="" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="./2.jpg" style={{ width: "100%" }} alt="" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="./3.jpg" style={{ width: "100%" }} alt="" />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={(event) => plusSlides(event, -1)}>
          &#10094;
        </a>
        <a className="next" onClick={event => plusSlides(event, 1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span
          className="dot"
          onclick={(event) => currentSlide(event, 1)}
        ></span>
        <span
          className="dot"
          onclick={(event) => currentSlide(event, 2)}
        ></span>
        <span
          className="dot"
          onclick={(event) => currentSlide(event, 3)}
        ></span>
      </div>
    </div>
  );
}

export default Slide;
