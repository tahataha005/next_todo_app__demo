import React from "react";
import styles from "../home.module.css";
import SearchInput from "@/lib/ui/base/inputs/SearchInput";

const TopBar = () => {
  return (
    <div className={`flex row white-bg ${styles.topBar}`}>
      <div>
        <SearchInput />
      </div>
      <h2 className="flex center">Tasks</h2>
      <div className="flex"></div>
    </div>
  );
};

export default TopBar;
