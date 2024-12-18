import React, { useState } from "react";
import check from '../assets/check.png';
import uncheck from '../assets/uncheck.png';
import edit from '../assets/edit.png';
import delete_icon from '../assets/delete_icon.png';

function ToDoItem({task, deleteTask, toggleComplete, editTask}){

    const [isEditing, setIsEditing]= useState(false);
    const [editedTask, setEditedTask]= useState(task.text);

    const handleEdit=()=>{
        if(editedTask.trim()){
            editTask(task.id, editedTask);
            setIsEditing(false);
        }
    };

    return(
        <>
            <div className="flex items-center my-3 gap-5">
                <div className={`flex flex-1 items-center ${isEditing? "" : "cursor-pointer"}`} 
                    onClick={!isEditing? ()=>toggleComplete(task.id): undefined}>
                        
                    <img className="w-7" src={task.isComplete? check: uncheck} alt="" />

                    {isEditing?(
                        <input className="ml-4 text-[17px] outline-none" 
                            type="text" 
                            value={editedTask} 
                            onChange={(e)=> setEditedTask(e.target.value)} autoFocus/>
                        ):(
                        <p className={`text-black ml-4 text-[17px] decoration-slate-400 ${task.isComplete? "line-through": ""}`}>
                            {task.text}
                        </p>
                    )}
                </div>

                {isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="px-2 py-1 text-sm text-white bg-green-500 rounded-md"
                    >
                        Save
                    </button>
                    ) : (
                        <img onClick={()=> setIsEditing(true) } className="w-6 cursor-pointer hover:brightness-125" src={edit} alt="" />
                    )}
                <img onClick={()=> deleteTask(task.id)} className="w-6 pl-1 cursor-pointer hover:brightness-200" src={delete_icon} alt="" />
            </div>
        </>
    );
}

export default ToDoItem;