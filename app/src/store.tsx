import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./features/todoSlice";
import themeSlice from "./features/themeSlice";

export const store = configureStore({
    reducer : {
        todos : todoSlice , 
        theme : themeSlice
    }
})



// typescript set up 
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;