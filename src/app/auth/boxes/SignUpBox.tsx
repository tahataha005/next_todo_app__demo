import { AnimatePresence } from "framer-motion";
import React, { FC } from "react";
import Button from "@/components/base/buttons/BaseButton";
import { motion } from "framer-motion";
import styles from "../../auth.module.css";

type Props = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

const SignUpBox: FC<Props> = ({ isLogin, setIsLogin }) => {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isLogin && (
        <motion.div
          layout
          variants={{
            hidden: { width: "0", opacity: 0 },
            visible: { width: "50%", opacity: 1 },
          }}
          animate={isLogin ? "visible" : "hidden"}
          className={`flex column center rounded primary-bg ${styles.alternativeAuth}`}
        >
          <h2 className="white-text">Don&#39;t have an account?</h2>
          <Button
            text="Sign Up"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            color="secondary-bg"
            textColor="black-text"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpBox;
