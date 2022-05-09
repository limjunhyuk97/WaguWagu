import IntroTemplate from "@Templates/Intro";
import Slider from "react-slick";
import { CarouselSettings } from "@Style/carousel";
import { useState, useEffect } from "react";

const Intro = () => {
  return (
    <>
      <IntroTemplate turn={1} />
      <IntroTemplate turn={2} />
      <IntroTemplate turn={3} />
      <IntroTemplate turn={4} />
    </>
  );
};

export default Intro;
