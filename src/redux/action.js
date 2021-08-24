import { DELETETODO } from "./action-types"


export const deleteHandler=(idt)=>{
    return{
        type:DELETETODO,
        payload:idt
    }
}