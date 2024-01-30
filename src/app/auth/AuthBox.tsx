"use client";

import React, { useState } from "react";
import styles from "../auth.module.css";
import InfoBox from "./boxes/InfoBox";
import SignUpBox from "./boxes/SignUpBox";
import { motion } from "framer-motion";

const AuthBox = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div className={`flex row center rounded ${styles.authBox}`} layout>
      <InfoBox isLogin={isLogin} setIsLogin={setIsLogin} />
      <SignUpBox isLogin={isLogin} setIsLogin={setIsLogin} />
    </motion.div>
  );
};

export default AuthBox;
