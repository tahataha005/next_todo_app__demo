import React from "react";
import styles from "../home.module.css";
import Image from "next/image";
import profile from "@/lib/assets/profile.jpg";
import ProgressBar from "@/lib/ui/base/display/ProgressBar";
import ProfileStat from "./ProfileStat";
import SideSchedule from "./SideSchedule";

const ProfileBar = () => {
  return (
    <div
      className={`flex column full-height white-bg shadow ${styles.profileBar}`}
    >
      <div className={`flex center ${styles.profileBarHeader}`}>
        <h4 className="primary-text">TASK MANAGER</h4>
      </div>
    </div>
  );
};

export default ProfileBar;
