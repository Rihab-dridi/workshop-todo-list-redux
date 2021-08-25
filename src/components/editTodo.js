import React, { useState,useDispatch } from 'react'
import { editHandler } from '../redux/action'

export default function EditTodo({task}) {
    const [show, setshow] = useState(false)
    const [input, setInput]=useState(task.text)

const dispatch = useDispatch()

   const toggle=()=>{
setshow(!show)
   }
   const submissionHandler=()=>{
dispatch(editHandler(task.id,input))
   toggle()
   }
  
    return (
        <div className='edit-container' >
            <button onClick={toggle} className='toggle' > edit</button>
           { show &&  <form>
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
            </form> }
        </div>
    )
}
