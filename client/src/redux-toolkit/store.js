import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authMessage from "./features/authMessage";

export const store = configureStore({
    reducer: {
        user: authSlice,
        authMessage: authMessage
    }
});
