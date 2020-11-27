import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";

const RespCarousel = ({ images }) => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.showImage.img);

  const result = images.filter((img) => image !== img);
  result.unshift(image);

  return (
    <div className="caurosel">
      <div
        className="closemodal"
        onClick={() => dispatch({ type: "SET_OPEN", payload: false })}
      >
        <i className="fas fa-times" style={{ fontSize: "3rem" }}></i>
      </div>

      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {result.map((img, i) => (
          <img src={img} key={i} alt="img" />
        ))}
      </Carousel>
    </div>
  );
};

export default RespCarousel;
