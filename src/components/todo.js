import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler, doneHandler } from "../redux/action";



export default function Todo({task}) {

const dispatch=useDispatch()

// const deleteTodo=()=>{
//   dispatch(deleteHandler(task.id))
// }
  return (
    <div className="todo-container">
      <h5
      style={ task.isDone ? {textDecoration:'line-through'}:{}   }
      >{task.text}</h5>
      <div>
        <button onClick={()=>{ dispatch(doneHandler(task.id)) }} >Done</button>
        <button onClick={()=>dispatch(deleteHandler(task.id)) }  >Del</button>
        <button> Edit</button>
      </div>
    </div>
  );
}
