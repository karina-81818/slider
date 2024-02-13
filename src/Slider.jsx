import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import imageSlider from "./imageSlider";
import Dots from './Dots';
import './Slider.css';


const len = imageSlider.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(1);
  
  let slidesCount = imageSlider.length;

  
  

  function prevSlide() {
    //setActiveIndex(activeIndex < 1 ? 0 : activeIndex - 1)
    setActiveIndex(prevSlide=>prevSlide-1)
    if(activeIndex<1){
      setActiveIndex(0) 
    }
    activeIndex-1;
    
  }

  function nextSlide () {
    //setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    setActiveIndex(prevSlide=>prevSlide+1)
    //setCount(count+1)
    if(activeIndex===len){{
      setActiveIndex(len) 
    }
    }
  }

  return (
    <div className="container">
      <div className="dots-container">
        <button className="prev">oo</button>
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        count={count}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      <p>{count + "/" + slidesCount}</p>
      </div>
      
      <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <button  className="next" onClick={nextSlide}>&#10095;</button>
      </div>
      
    </div>
  );
}

export default Slider;