import React, { FC } from "react";
import styles from "../home.module.css";

type Props = {
  header: string;
  content: string;
};

const ProfileStat: FC<Props> = ({ header, content }) => {
  return (
    <div className={`flex center column ${styles.profileStat}`}>
      <h3 className="bold">{content}</h3>
      <p className="bold grey-text">{header}</p>
    </div>
  );
};

export default ProfileStat;
