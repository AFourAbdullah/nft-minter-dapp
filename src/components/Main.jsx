import React from "react";
import Home from "./Home";
import Lottie from "lottie-react";
import animationData from "../assets/animation_llpiabf4 (3).json";

const Main = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-screen flex items-center justify-around ">
      <Home />
      <Lottie
        animationData={animationData}
        width={100}
        options={defaultOptions}
      />
    </div>
  );
};

export default Main;
