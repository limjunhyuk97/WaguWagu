import IntroTemplate from "@Templates/Intro";
import { IntroBanner } from "@Constant/";
import { SwapContainer } from "./styles";
import { Swap } from "@Organisms/Intro";
import { useState, useEffect } from "react";
import _ from "lodash";

const Intro = () => {
  const [curPage, setCurPage] = useState(1);
  const [nextFlag, setNextFlag] = useState(window.innerHeight / 20);
  const [beforeFlag, setBeforeFlag] = useState(0);

  const getNext = (cur) => {
    if (cur < IntroBanner[0]) {
      window.scrollTo(0, window.innerHeight * cur);
      setNextFlag(window.innerHeight * cur + window.innerHeight / 20);
      setBeforeFlag(window.innerHeight * cur - window.innerHeight / 20);
      return cur + 1;
    }
    return cur;
  };

  const getPrev = (cur) => {
    if (cur !== 1) {
      cur -= 1;
      window.scrollTo(0, window.innerHeight * cur);
      setNextFlag(window.innerHeight * (cur - 1) + window.innerHeight / 20);
      setBeforeFlag(window.innerHeight * (cur - 1) - window.innerHeight / 20);
      return cur - 1;
    }
    return cur;
  };

  const handleScroll = () => {
    if (window.scrollY > nextFlag) {
      setCurPage(getNext);
    }
    if (window.scrollY < beforeFlag) {
      setCurPage(getPrev);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <IntroTemplate turn={1} />
      <IntroTemplate turn={2} />
      <IntroTemplate turn={3} />
      <IntroTemplate turn={4} />
      <SwapContainer>
        <Swap turn={curPage} />
      </SwapContainer>
    </>
  );
};

export default Intro;
