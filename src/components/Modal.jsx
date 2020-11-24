import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RespCarousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";

const backdrop = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 },
  },
};

const Modal = ({ selectedImage }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.showModal);

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => dispatch({ type: "SET_OPEN", payload: false })}
    >
      {open && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <RespCarousel selectedImage={selectedImage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
