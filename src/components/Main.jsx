import React from "react";
import Home from "./Home";
import Lottie from "lottie-react";
import animationData from "../assets/animation_llpiabf4 (3).json";

const Main = () => {
  return (
    <div className="w-screen flex items-center justify-around ">
      <Home />
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Main;
