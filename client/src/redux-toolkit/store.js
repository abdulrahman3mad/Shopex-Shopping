import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authMessage from "./features/authMessage";
import homeSlice from "./features/homeDataSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
        user: authSlice,
        authMessage: authMessage
	},
});
