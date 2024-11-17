import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as date } from "./data/tasks";
import './index.css'


function App() {
  

 
 
  return (
    <div className="bg-zinc-950 h-screen">
     <div className="container mx-auto p-10 ">
     <TaskForm  />
     
     <TaskList />
     </div>
      
    </ div>
  );
}

export default App;
