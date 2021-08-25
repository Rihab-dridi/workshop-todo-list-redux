import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editHandler } from "../redux/action";
import Modal from "react-modal";

export default function EditTodo({ task }) {
    //step one 
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      backgroundColor: "rgba(253, 251, 251, 0.712)",
      border: "solid 1px gray",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "500px",
    },
  };
  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow(!show);
  };
//step two
  const [input, setInput] = useState(task.text);

  //step three
  const dispatch = useDispatch();
  const submissionHandler = (e) => {
    e.preventDefault();
    dispatch(editHandler(task.id, input));
    console.log(task.id);
    toggle();
  };

  return (
    <div className="edit-container">
      <button onClick={toggle} className="toggle">
        {" "}
        edit
      </button>
      <Modal isOpen={show} style={customStyles}>
        <h1 className="title"> Edit your task </h1>
        <form>
          <input
            id="edit"
            type="text"
            value={input}
            autoFocus
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="btns-edit">
            <button onClick={submissionHandler}>Submit</button>
            <button onClick={toggle}>Cancil</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
//step1: create the Modal (check the documentation)
//1-install the modal
//2-import the modal 
//3-create a local state to control the open and close of the Modal (show )
//4-link the local state with the buttons (edit, submit, cancel)

//step2: Read the new imput of the user 
//1-create a local state in wich we'll store the written input (input) with an initial value : the original text(task.text)
//2-set the state so it will change its value with the onChange event (e.target.value)

//step3: dispatch the action of the edinting
//3-call the editing function and asign values to its parameters ( the id of this very task and the edited text (input))
