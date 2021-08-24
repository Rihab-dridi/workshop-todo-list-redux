import { ADDTODO, DELETETODO,DONETODO } from "./action-types"

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
      ], 
      filter:''
}

const todosReducer=(state=initialState, action)=>{
    switch (action.type) {
        case DELETETODO:return{
            ...state,
            todos: state.todos.filter(el=> el.id!== action.payload )
        }
        case DONETODO: return{
            ...state,
            todos: state.todos.map(el=>  el.id=== action.payload ?  {...el, isDone:!el.isDone }:el )
        }

        case ADDTODO: return{
            ...state,
            todos: [...state.todos, action.payload]
        }
    
        default:return state
           
    }
}
export default todosReducer