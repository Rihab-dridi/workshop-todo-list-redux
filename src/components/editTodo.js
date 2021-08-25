import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { editHandler } from '../redux/action'
import Modal from 'react-modal';

export default function EditTodo({task}) {
    Modal.setAppElement('#root');
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const [show, setshow] = useState(false)
    const [input, setInput]=useState(task.text)

const dispatch = useDispatch()
const toggle=()=>{
    setshow(!show)
}
   const submissionHandler=(e)=>{
   e.preventDefault()
  dispatch(editHandler(task.id, input))
  console.log(task.id)
   toggle()
   }
  

    return (
        <div className='edit-container' >
            <button onClick={toggle} className='toggle' > edit</button>
<Modal  isOpen={show} style={customStyles}  >
    <h3> edit your task </h3>
<form>
                <input  
                id='edit'
                type='text'
                value={input}
         onChange={(e)=> setInput(e.target.value) }
                
                />
                <div>
                    <button    onClick={submissionHandler}>Submit</button>
                    <button  onClick={toggle}>CNCL</button>
                </div>
            </form>


</Modal>


           {/* { show &&  <form>
                <input  
                id='edit'
                type='text'
                value={input}
         onChange={(e)=> setInput(e.target.value) }
                
                />
                <div>
                    <button    onClick={submissionHandler}>Submit</button>
                    <button  onClick={toggle}>CNCL</button>
                </div>
            </form> } */}
        </div>
    )
}
