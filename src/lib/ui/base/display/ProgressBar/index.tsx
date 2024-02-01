"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import "./style.css";

type Props = {
  percentage: number;
};

const ProgressBar: FC<Props> = ({ percentage }) => {
  return (
    <div className="flex row center full-width full-rounded progress-bar-container">
      <motion.div
        className="full-rounded primary-bg progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${percentage * 100}%`, speed: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
