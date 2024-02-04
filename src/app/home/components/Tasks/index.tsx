import React from "react";
import "./style.css";

import Categories from "./CategoriesSelection";
import TasksList from "./TasksList";
import AddTask from "./AddButtonSection";

const Tasks = () => {
  return (
    <div className="flex column full-hieght tasks-container">
      <Categories />
      <TasksList />
      <AddTask />
    </div>
  );
};

export default Tasks;
