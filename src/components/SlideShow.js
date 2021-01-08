import React from "react";
import CardsContainer from "./CardsContainer";
import { Slide } from "react-slideshow-image"; //Using the React-SlideShow Library
import { arr } from "../data/data";
const SlideShow = () => {
  return (
    <div>
      <Slide easing='ease' autoplay={false}>
        {arr.map((array) => (
          <div className='each-slide'>
            <CardsContainer arrPerson={array} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
