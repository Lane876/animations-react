import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbarlinks">
      <div>
        <Link
          to="first"
          spy={true}
          //   smooth={true}
          offset={0}
          duration={500}
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
          //   smooth={true}
          offset={0}
          duration={500}
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
          //   smooth={true}
          offset={0}
          duration={500}
          delay={0}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          third
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
