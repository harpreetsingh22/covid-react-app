import React from "react";
import we from "../src/images/green_virus.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="ABOUT CORONA"
        imgsrc={we}
        visit="/contact"
        btname="Contact Now"
        paragraph="Coronaviruses are a family of viruses that can cause illnesses such as the common cold, severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS). In 2019, a new coronavirus was identified as the cause of a disease outbreak that originated in China.

        The virus is now known as the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). ."
      />
    </>
  );
};

export default About;
