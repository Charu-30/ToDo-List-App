import React, { useEffect, useState } from 'react'
import Header from './componets/Header'
import ToDoList from './componets/ToDoList';

function App() {
  const [tasks, setTasks]= useState(localStorage.getItem("tasks")? 
  JSON.parse(localStorage.getItem("tasks")): []);
  
  const [newTask, setNewTask]= useState("");
    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

  const addTask=()=>{
    if(newTask.trim()){
        setTasks([...tasks, 
          {id: Date.now(), 
            text: newTask, 
            isComplete: false}
          ]);
        setNewTask('');
    }
  };

  const deleteTask= (id)=>{
    setTasks(tasks.filter((task)=>task.id!==id));
  } 

  const editTask=(id, newText)=>{
    setTasks(tasks.map((task)=>task.id===id? {...task, text: newText}: task));
  };

  const toggleComplete=(id)=>{
    setTasks(tasks.map((task)=>
      task.id=== id? {...task, isComplete: !task.isComplete}: task));
  };

  return (
    <>
      <div className='bg-gradient-to-b from-blue-500 to-purple-400 grid py-4 min-h-screen text-white'>
        <div className="bg-white place-self-center w-full max-w-lg flex flex-col p-7 min-h-[550px] rounded-xl text-black shadow-lg shadow-blue-800/50">
            <Header/>
            
              <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' 
                  type="text" 
                  value={newTask} 
                  onChange={(e)=>setNewTask(e.target.value)} 
                  placeholder='Add a new Task' 
                />
                <button className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-600' 
                  onClick={addTask}>
                    Add+
                </button>
              </div>

            <ToDoList 
              tasks={tasks} 
              deleteTask={deleteTask} 
              toggleComplete={toggleComplete} 
              editTask={editTask} 
            />
        </div>
      </div>
    </>
  )
}

export default App;
