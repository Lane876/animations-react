import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RespCarousel from "./RespCarousel";
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

const Modal = ({ images }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.showModal);

  useEffect(() => {
    if (open) {
      const body = document.body;
      body.style.position = "fixed";
    } else {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

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
          <RespCarousel images={images} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
