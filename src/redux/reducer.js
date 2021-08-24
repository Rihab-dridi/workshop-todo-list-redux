import { DELETETODO } from "./action-types"

const initialState={
    todos:[
        {
          id: 1,
          text: "walk the dog",
          isDone: false,
        },
        {
          id: 2,
          text: "save the world ",
          isDone: false,
        },
      ]
}

const todosReducer=(state=initialState, action)=>{
    switch (action.type) {
        case DELETETODO:return{
            ...state,
            todos: state.todos.filter(el=> el.id!== action.payload )
        }
    
        default:return state
           
    }
}
export default todosReducer