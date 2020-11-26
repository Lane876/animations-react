import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

const Navbar = ({ showBelow }) => {
  const [navbarChange, setNavbarChange] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);
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

  return (
    <div className={`navbar ${navbarChange}`}>
      <div className={`logo ${navbarChange}`}>LOGO</div>
      <div className={`navbarlinks ${navbarChange} ${mobile}`}>
        <div>
          <Link
            to="first"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            first
          </Link>
        </div>
        <div>
          <Link
            to="second"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            second
          </Link>
        </div>
        <div>
          <Link
            to="third"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            third
          </Link>
        </div>
      </div>
      <div className="burger" onClick={() => setSideBar(!sideBar)}>
        <Hamburger
          rounded
          size={32}
          distance="lg"
          color="#fff"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
