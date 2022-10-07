import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dash</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={Navbar}
              activeClass="activeClasse"
              smooth={true}
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to={"Services"}
              activeClass="activeClasse"
              smooth={true}
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to={"Experience"}
              activeClass="activeClasse"
              smooth={true}
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to={"Portfolio"}
              activeClass="activeClasse"
              smooth={true}
            >
              <li>Portfolios</li>
            </Link>
            <Link
              spy={true}
              to={"Testimonials"}
              activeClass="activeClasse"
              smooth={true}
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link
          spy={true}
          to={"Contact"}
          activeClass="activeClasse"
          smooth={true}
        >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
