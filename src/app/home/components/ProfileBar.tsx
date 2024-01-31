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

      <div className={`flex column center ${styles.profileBarInfo}`}>
        <div className={`flex center circular ${styles.profilePhoto}`}>
          <Image
            src={profile}
            alt="profile"
            width={100}
            height={100}
            sizes="4"
            priority
          />
        </div>
        <div className={`flex column center ${styles.userInfo}`}>
          <h3 className="bold black-text">Taha Taha</h3>
          <p className="grey-text">taha.f.taha0@gmail.com</p>
        </div>

        <ProgressBar percentage={0.9} />

        <div className="flex row center full-width">
          <ProfileStat content="22" header="Done" />
          <ProfileStat content="4" header="Left" />
          <ProfileStat content="26" header="Total" />
        </div>
      </div>

      <div className={`flex column ${styles.profileBarSchedules}`}>
        <h4 className="primary-text">SCHEDULES</h4>
        <div className="flex column full-width">
          <SideSchedule title="Monday" />
          <SideSchedule title="Graduation Day" />
          <SideSchedule title="Handover tasks" />
        </div>
      </div>

      <div className={`flex column ${styles.profileBarTeam}`}>
        <h4 className="primary-text">TEAM</h4>
        <div className={`flex full-width ${styles.teamContainer}`}>
          <div className="flex circular primary-bg"></div>
          <div className="flex circular primary-bg"></div>
          <div className="flex circular primary-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
