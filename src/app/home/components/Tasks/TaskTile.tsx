const Task = () => {
  return (
    <div className="flex row grey-bg task">
      <div className="flex center primary-bg task-checkbox"></div>
      <div className="task-content">
        <p>Task title</p>
        <p>Task description</p>
      </div>
    </div>
  );
};

export default Task;
