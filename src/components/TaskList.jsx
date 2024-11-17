import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { taskss } = useContext(TaskContext);

  if (taskss.length === 0) {
    return <h1 className="text-white text-center text-3xl my-10">No hay Tarea aun ... <br/>autor: Juan Alvarez DEV</h1>;
  }

  return (
    <div className=" grid grid-cols-4 gap-4">
      {taskss.map((task) => (
       
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}

export default TaskList;
