import React, { useState } from "react";
import { motion } from "framer-motion";
import Underline from "../Atoms/Underline";

const MenuItem = ({ children, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        {children}
        {isBeingHovered && <Underline />}
      </span>
    </motion.div>
  );
};

export default MenuItem;
