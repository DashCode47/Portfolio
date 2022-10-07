import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br />
          ispum is simple dummy data to read
        </span>
        <a href={Resume} download>
          <button className="button s-button">Dowload Cv</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right SIde */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "25rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "20rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* 2nd card */}
        <motion.div
          whileInView={{ left: "4rem" }}
          initial={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, PhotosJavaScript, React"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          whileInView={{ left: "25rem" }}
          initial={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              " text for the ux and the ui part of this web page in react"
            }
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }} />
      </div>
    </div>
  );
};

export default Services;
