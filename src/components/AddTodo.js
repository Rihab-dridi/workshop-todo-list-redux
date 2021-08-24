import React from 'react'

export default function AddTodo() {
  return (
    <div className="AddTodo">
    <input
    type='text'
    placeholder='type here...'
    id='myInput'
  
    />
    <button  className='btn-add' > Add </button>

  </div>
  )
}
