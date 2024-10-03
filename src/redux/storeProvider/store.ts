import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter/counterSlice";
import todoReducer from "../slice/todo/todoSlice";
import userReducer from "../slice/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        users: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
