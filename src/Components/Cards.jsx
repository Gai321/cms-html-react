import React from "react";
import "./Cards.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Cards() {

const Cards = (props) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index} onClick={slide.clickEvent}>
              {/* <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                }}
              ></div> */}
                {slide.image}

              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
            </div>
          );
        })}
      </div>

     
    
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};
}