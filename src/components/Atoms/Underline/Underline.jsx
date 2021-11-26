import React from "react";
import { motion } from "framer-motion";

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-1 right-1 h-1 bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
    layoutId="underline"
    layout
  ></motion.div>
);

export default Underline;
