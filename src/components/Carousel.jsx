import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../images/wallpaperflare.com_wallpaper1.jpg";
import two from "../images/wallpaperflare.com_wallpaper2.jpg";
import three from "../images/wallpaperflare.com_wallpaper3.jpg";
import four from "../images/wallpaperflare.com_wallpaper4.jpg";
import five from "../images/wallpaperflare.com_wallpaper5.jpg";
import { useDispatch, useSelector } from "react-redux";

const RespCarousel = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.showImage.img);
  const images = [one, two, three, four, five];

  const result = images.filter((img) => image != img);
  result.unshift(image);

  return (
    <div className="caurosel">
      <Carousel autoPlay infiniteLoop>
        {result.map((img, i) => (
          <img src={img} key={i} />
        ))}
      </Carousel>
      <div
        className="closemodal"
        onClick={() => dispatch({ type: "SET_OPEN", payload: false })}
      >
        X
      </div>
    </div>
  );
};

export default RespCarousel;
