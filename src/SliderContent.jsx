import React from "react";


function SliderContent({ activeIndex, imageSlider }) {
  return (
    <div>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          
        </div>
      ))}
    </div>
  );
}

export default SliderContent;