import React, { useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-web";
import ArrowAnimation from "./Arrow.json";

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Arrow = () => {
  useEffect(() => {
    const arrowContainer = document.getElementById("arrow-container");

    if (arrowContainer) {
      const arrowAnimation = Lottie.loadAnimation({
        container: arrowContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: ArrowAnimation,
      });

      // Cleanup animation on component unmount
      return () => arrowAnimation.destroy();
    }
  }, []);

  return <ArrowContainer id="arrow-container" />;
};

export default Arrow;
