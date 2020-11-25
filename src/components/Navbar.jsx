import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ showBelow }) => {
  const [navbarChange, setNavbarChange] = useState("");

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

  return (
    <div className={`navbar ${navbarChange}`}>
      <div className={`logo ${navbarChange}`}>LOGO</div>
      <div className={`navbarlinks ${navbarChange}`}>
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
    </div>
  );
};

export default Navbar;
