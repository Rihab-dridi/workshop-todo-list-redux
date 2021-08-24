import React from "react";



export default function Todo({task}) {


  return (
    <div className="todo-container">
      <h5>{task.text}</h5>
      <div>
        <button  >Done</button>
        <button   >Del</button>
      </div>
    </div>
  );
}
