import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = ({ showBelow, darkMode, setDarkMode }) => {
  const [navbarChange, setNavbarChange] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [mobile, setMobile] = useState("mobile");

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      setNavbarChange("change");
    } else {
      setNavbarChange("");
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  useEffect(() => {
    if (isOpen) {
      setMobile("mobile");
    } else {
      setMobile("");
    }
  }, [isOpen]);

  // useEffect(() => {
  //   if (isOpen) {
  //     const body = document.body;
  //     body.style = "overflow: hidden";
  //   } else {
  //     const body = document.body;
  //     body.style = "";
  //   }
  // }, [isOpen]);

  return (
    <div className={`navbar ${navbarChange}`}>
      {/* <div className={`logo ${navbarChange}`}> */}
      <a href="#" className="logo">
        LOGO
      </a>
      {/* </div> */}
      <div className={`navbarlinks ${navbarChange} ${mobile}`}>
        <div className="link">
          <Link
            to="first"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
            onClick={() => setOpen(!isOpen)}
          >
            first
          </Link>
        </div>
        <div className="link">
          <Link
            to="second"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
            onClick={() => setOpen(!isOpen)}
          >
            second
          </Link>
        </div>
        <div className="link">
          <Link
            to="third"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
            onClick={() => setOpen(!isOpen)}
          >
            third
          </Link>
        </div>
      </div>
      <div className="burger">
        <Hamburger
          rounded
          size={32}
          // distance="lg"
          color="#fff"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div className="toggle-container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <span className="toggle">
          <input
            checked={darkMode}
            onChange={() => setDarkMode((prevMode) => !prevMode)}
            id="checkbox"
            className="checkbox"
            type="checkbox"
          />
          <label htmlFor="checkbox" />
        </span>
        <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
