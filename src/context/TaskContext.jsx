import { createContext, useState, useEffect } from "react";
import { tasks as date } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [taskss, setTasks] = useState([]);

  function createTask(A, B) {
    setTasks([
      ...taskss,
      {
        title: A,
        id: taskss.length,
        description: B,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(taskss.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    // en este caso useEffect es un manejador de evento y cuando se inicia la app o hay un cambia
    // carga el arrgle de task as date
    setTasks(date);
    // aqui se ya se cargo
  }, []);

 
  return (
    <TaskContext.Provider
      value={{
        taskss,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
