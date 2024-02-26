"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Notification = ({ setStatus }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
      className="absolute w-[659px] max-[768px]:w-[313px] translate-x-[-50%] left-[50%] top-[8px] transition text-[1rem] text-[#256600] flex justify-between items-center font-ttHovesNormal bg-[#BEFF6C] rounded-[8px] shadow-custom ps-[16px] py-[8px] pe-[8px]"
    >
      Sent. Check your e-mail address
      <div
        onClick={() => setStatus(false)}
        className="remove-img w-[24px] h-[24px] cursor-pointer"
      ></div>
    </motion.div>
  );
};

export default Notification;
