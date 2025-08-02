"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type buttonText = {
  text : string;
}

const OrangeButton = ({text}:buttonText) => {
  return (
    <motion.button
      className="group flex items-center gap-3 bg-theme-orange text-theme-white p-1 rounded-full relative overflow-hidden"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <span className="font-semibold pl-5">{text}</span>

      {/* Animated Circle */}
      <motion.div
        className="relative w-9 h-9 bg-theme-white rounded-full flex items-center justify-center overflow-hidden"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 0.9 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Base Arrow - exits first */}
        <motion.span
          className="absolute text-theme-orange"
          style={{ rotate: "-45deg" }}
          variants={{
            rest: {
              opacity: 1,
              x: 0,
              y: 0,
            },
            hover: {
              opacity: 0,
              x: 4,
              y: -4,
            },
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
        >
          <ArrowRight size={24} />
        </motion.span>

        {/* Hover Arrow - enters after first one leaves */}
        <motion.span
          className="absolute text-theme-orange"
          style={{ rotate: "-45deg" }}
          variants={{
            rest: {
              opacity: 0,
              x: -4,
              y: 4,
            },
            hover: {
              opacity: 1,
              x: 0,
              y: 0,
            },
          }}
          transition={{
            duration: 0.15,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <ArrowRight size={24} />
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default OrangeButton;
