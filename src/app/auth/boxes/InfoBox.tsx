import React, { FC } from "react";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import styles from "../../auth.module.css";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
import { motion } from "framer-motion";

type Props = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

const InfoBox: FC<Props> = ({ isLogin, setIsLogin }) => {
  return (
    <motion.div
      className={`flex column center ${styles.currentForm}`}
      layout
      variants={{
        expanded: { width: "100%" },
        collapsed: { width: "50%" },
      }}
      initial="collapsed"
      animate={isLogin ? "collapsed" : "expanded"}
    >
      <div className={styles.authLogo}>
        <Image src={logo} alt="logo" width={100} height={100} sizes="4" />
      </div>

      {isLogin ? (
        <motion.div layout>
          <motion.h1>Welcome Back</motion.h1>
          <LoginForm />
        </motion.div>
      ) : (
        <motion.div layout>
          <motion.h1>Create Account</motion.h1>
          <SignUpForm
            loginSwitch={() => {
              setIsLogin(!isLogin);
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default InfoBox;
