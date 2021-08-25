import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action";

export default function AddTodo() {
  const [newText, setNewText] = useState("");

  const dispatch = useDispatch();

  const addtodos = () => {
    dispatch(
      addHandler({
        id: Math.random(),
        text: newText,
        isDone: false,
      })
    );
    setNewText("");
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="type here..."
        id="myInput"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        autoFocus
      />
      <button className="btn-add" onClick={addtodos}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
}
//step1: Read the new imput of the user 
//1-create a local state in wich we'll store the written input (newText) 
//2-set the state so it will change its value with the onChange event (e.target.value)

//step3: dispatch the action of the Add 
//3-call the editing function and asign values to its parameter :
         // a whole object just like the previous tasks ( we should fill all the properties of the object )
         // Math.random(): to gerate a unique random id 
         //the text: will receive the written input stored in the local state (newText)
         //isDone: take the default value which is false 
