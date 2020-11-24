import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  useEffect(() => {
    gsap.from(".third-animation", {
      scrollTrigger: {
        trigger: ".third-container",
        toggleActions: "restart pause restart pause",
        delay: 1,
      },
      ease: "ease-in",
      duration: 1,
      opacity: 0,
      y: -200,
      stagger: 0.3,
    });
  }, []);
  return (
    <div className="third">
      <div className="third-container">
        <p className="third-animation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dignissimos.
        </p>
      </div>
    </div>
  );
};

export default Third;
