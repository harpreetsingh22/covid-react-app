import React from "react";
import web from "../src/images/virus.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
         p="Covid 19 resource kit" 
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        className="brand-name"
        paragraph="check the sympotms and many more"
      />
    </>
  );
};

export default Home;
