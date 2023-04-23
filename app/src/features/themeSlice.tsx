import { createSlice } from "@reduxjs/toolkit";

import type {PayloadAction} from "@reduxjs/toolkit";

export interface IColor {
    color : string
}

const initialState : IColor = {color : "white"}


export const themeSlice = createSlice({
    name : "theme",
    initialState  ,
    reducers : {
        changeColor : (state , action : PayloadAction<IColor>)=>{
          state.color = action.payload.color
            
        }
    }
})


export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;