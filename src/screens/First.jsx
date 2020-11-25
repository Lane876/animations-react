import React, { useEffect } from "react";
import { gsap } from "gsap";
import Gallery from "../components/Gallery";

const First = () => {
  useEffect(() => {
    gsap.from(".first-animation", {
      scrollTrigger: {
        trigger: ".first",
        toggleActions: "restart none restart none",
        // markers: true,
      },
      ease: "ease-in-out",
      duration: 1,
      opacity: 0,
      y: -200,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="first">
      <div className="first-animation">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus neque dolores ipsum rerum. Voluptatem reprehenderit hic
          fugit commodi nihil, itaque repudiandae tempore eius molestias
          mollitia magni qui optio expedita rerum.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Gallery />
      </div>
    </div>
  );
};

export default First;
