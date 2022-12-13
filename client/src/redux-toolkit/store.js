import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authMessage from "./features/authMessage";
import homeSlice from "./features/homeDataSlice";
import latestProSlice from "./features/latestProSlice";
import shopexOfferSlice from "./features/shopexOfferSlice";
import featuredSlice from "./features/FeaturedDataSlice";
import productsSlice from "./features/productsSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
		user: authSlice,
		authMessage: authMessage,
		featuredData: featuredSlice,
		latestPro: latestProSlice,
		shopexOffer: shopexOfferSlice,
		products: productsSlice,
	},
});
