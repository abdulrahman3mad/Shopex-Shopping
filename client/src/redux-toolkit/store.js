import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authMessage from "./features/authMessage";
import homeSlice from "./features/homeDataSlice";
import featuredSlice from "./features/FeaturedDataSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
		user: authSlice,
		authMessage: authMessage,
		featuredData: featuredSlice,
	},
});
