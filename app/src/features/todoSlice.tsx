import {createSlice} from "@reduxjs/toolkit";

import type {PayloadAction} from "@reduxjs/toolkit";


export interface ITodo {
    id : number;
    todo : string;
    caption : string;
}

export interface IinitType {
    todoList : ITodo[]
}

const initialState : IinitType = {
    todoList : []
}

export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state , action : PayloadAction<ITodo>)=>{
            state.todoList.push(action.payload)
        } ,
    }
})



export const {addTodo , deleteTodo , editTodo} = todoSlice.actions;

export default todoSlice.reducer;
