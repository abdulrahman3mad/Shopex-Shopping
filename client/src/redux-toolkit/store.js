import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "./features/homeDataSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
	},
});
