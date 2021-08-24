import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler } from "../redux/action";



export default function Todo({task}) {

const dispatch=useDispatch()

// const deleteTodo=()=>{
//   dispatch(deleteHandler(task.id))

// }
  return (
    <div className="todo-container">
      <h5>{task.text}</h5>
      <div>
        <button  >Done</button>
        <button onClick={()=>dispatch(deleteHandler(task.id)) }  >Del</button>
      </div>
    </div>
  );
}
