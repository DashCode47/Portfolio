import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for all these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br />
          ispum is simple dummy data to read
          <br />
          ispum is simple dummy data to read
          <br />
          ispum is simple dummy data to read
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} />
          </div>
          <div className="w-secCircle">
            <img src={Fiver} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} />
          </div>
        </motion.div>
        {/* Back circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
