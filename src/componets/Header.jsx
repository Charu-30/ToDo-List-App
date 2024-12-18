import React from "react";
import todo_icon from '../assets/todo_icon.png';
function Header(){
    return(
        <>
            <div className="flex justify-center items-center mt-7 gap-2">
                <img className=" w-9" src={todo_icon} alt="" />
                <h1 className="text-4xl font-bold">To-Do List</h1>
            </div>
            
        </>
    )
}

export default Header;