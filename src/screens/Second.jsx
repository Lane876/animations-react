import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  useEffect(() => {
    gsap.from(".secondleft", {
      scrollTrigger: {
        trigger: ".secondleft",
        toggleActions: "restart pause restart pause",
        // markers: true,
      },
      ease: "ease-in",
      duration: 1,
      opacity: 0,
      x: -200,
      stagger: 0.3,
    });
    gsap.from(".secondright", {
      scrollTrigger: {
        trigger: ".secondleft",
        toggleActions: "restart pause restart pause",
        // markers: true,
      },
      ease: "ease-in",
      duration: 1,
      opacity: 0,
      x: 200,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="second">
      <div className="secondleft">
        <p className="secondleft">
          i possimus inventore, neque ratione, illum vel eligendi quas in vero
          hic ut accusantium dolore exercitationem! Recusandae unde distinctio
          esse.
        </p>
        <p className="secondleft">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae esse
          quas
        </p>
        <p className="secondleft">
          mus inventore, neque ratione, illum vel eligendi quas in vero hic ut
          accusan
        </p>
      </div>
      <div className="secondright">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque
        nostrum consequuntur distinctio. Iusto reprehenderit earum ad libero
        dolores. Rerum voluptatibus distinctio blanditiis doloremque id,
        adipisci aliquid nulla itaque reprehenderit!
      </div>
    </div>
  );
};

export default Second;
