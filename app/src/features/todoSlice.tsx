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
       
    }
})



export default todoSlice.reducer;
