import React, { FC } from "react";
import styles from "../home.module.css";

type Props = {
  title: string;
};

const SideSchedule: FC<Props> = ({ title }) => {
  return (
    <div className={`flex row full-width ${styles.sideSchedule}`}>
      <div className="circular primary-bg"></div>
      <p>{title}</p>
    </div>
  );
};

export default SideSchedule;
