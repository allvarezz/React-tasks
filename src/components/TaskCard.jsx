import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ title,description,id}) {


  
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-gray-800   text-white p-4 rounded-md text-center">
      <h1 className="text-2xl font-semibold capitalize">{title}</h1>
      <p className="text-gray-500 text-sm">{description}</p>
      <button className="bg-red-500 px-2 py-1 rounded mt-4 hover:bg-purple-500"
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete task {title}
      </button>
    </div>
  );

}

export default TaskCard;
