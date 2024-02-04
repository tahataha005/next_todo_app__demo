"use server";

import Tasks from "./components/Tasks";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={`flex row ${styles.homePage}`}>
      <Tasks />
    </div>
  );
};

export default Home;
