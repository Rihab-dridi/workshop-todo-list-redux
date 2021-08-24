
import { ADDTODO, DELETETODO, DONETODO } from "./action-types"


export const deleteHandler=(idt)=>{
    return{
        type:DELETETODO,
        payload:idt
    }
}

export const doneHandler=(idt)=>{
    return{
        type:DONETODO,
        payload:idt
    }
}
export const addHandler=(newTask)=>{
    return{
        type:ADDTODO,
        payload:newTask
    }
}