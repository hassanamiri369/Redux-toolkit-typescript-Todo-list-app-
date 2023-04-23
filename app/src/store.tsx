import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {}
})



// typescript set up 
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;