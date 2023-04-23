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
        deleteTodo : (state , action : PayloadAction<ITodo>)=>{
            state.todoList = state.todoList.filter(x => x.id !== action.payload.id)
        } ,

        editTodo : (state , action : PayloadAction<ITodo>)=>{
            const todo = state.todoList.find(x => x.id === action.payload.id)
            if(todo){
                todo.todo = action.payload.todo;
                todo.caption = action.payload.caption
            }
        }
    }
})



export const {addTodo , deleteTodo , editTodo} = todoSlice.actions;

export default todoSlice.reducer;
