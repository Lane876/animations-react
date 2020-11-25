import React, { useEffect, useState } from "react";
import one from "../images/wallpaperflare.com_wallpaper1.jpg";
import two from "../images/wallpaperflare.com_wallpaper2.jpg";
import three from "../images/wallpaperflare.com_wallpaper3.jpg";
import four from "../images/wallpaperflare.com_wallpaper4.jpg";
import five from "../images/wallpaperflare.com_wallpaper5.jpg";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

const images = [one, two, three, four, five];

export default function App() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_IMAGE",
      payload: selectedImg,
    });
  }, [dispatch, selectedImg]);

  return (
    <div>
      <div className="gallery_container">
        <Modal images={images} />
        <img
          src={selectedImg}
          alt="Selected"
          className="selected"
          onClick={() => dispatch({ type: "SET_OPEN", payload: true })}
        />
        <div className="imgContainer">
          {images.map((img, index) => (
            <img
              style={{
                border: selectedImg === img ? "4px solid purple" : "",
                margin: "3px",
              }}
              key={index}
              src={img}
              alt="dog"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
