import { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {

   
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const  {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log(title, desc);


    createTask(title, desc);
    setTitle('');
    setDesc('');



  };

  return (
    <div className="max-w-md mx-auto">
      
    <form onSubmit={handleSubmit} className="bg-red-900 p-10 mb-4 rounded ">
      <h1 className="my-4 text-2xl text-center text-white font-semibold">Registro de tarea</h1>

<input
  placeholder="Ingrese tarea"
  onChange={(e) => {
    setTitle(e.target.value);
  }}
  value={title}
  autoFocus
  className="bg-slate-300 p-3 w-full mb-2 text-black font-semibold"
/>


<textarea  onChange={(e) => {
    setDesc(e.target.value);
  }}  placeholder="Ingrese descripcion de tarea" value={desc} className="bg-slate-300 p-3 w-full mb-2"></textarea >

<button className="bg-purple-700 text-white px-3 py-1 hover:bg-purple-300 hover:text-black hover:font-semibold">Guardar</button>
</form>
    </div>

  );
}

export default TaskForm;
