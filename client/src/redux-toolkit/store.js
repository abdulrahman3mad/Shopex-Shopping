import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authMessage from "./features/authMessage";
import homeSlice from "./features/homeDataSlice";
import featuredSlice from "./features/featuredDataSlice";
import latestProSlice from "./features/latestProSlice";
import shopexOfferSlice from "./features/shopexOfferSlice";
import latestBlogSlice from "./features/latestBlogSlice";
import getBrands from "./features/brandsSlice";
import topCatagoriesSlice from "./features/topCatagoriesSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
		user: authSlice,
		authMessage: authMessage,
		featuredData: featuredSlice,
		latestPro: latestProSlice,
		shopexOffer: shopexOfferSlice,
		latestBlog: latestBlogSlice,
		brands: getBrands,
		topCatagories: topCatagoriesSlice,
	},
});
