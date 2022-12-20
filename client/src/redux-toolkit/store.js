import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlices/userSlice";
import authMessage from "./features/userSlices/authMessage";
import homeSlice from "./features/homeDataSlice";
import latestProSlice from "./features/latestProSlice";
import shopexOfferSlice from "./features/shopexOfferSlice";
import featuredSlice from "./features/FeaturedDataSlice";
import shopSlice from "./features/shopSlice";
import latestBlogSlice from "./features/latestBlogSlice";
import getBrands from "./features/brandsSlice";
import cartSlice from "./features/cartSlices/cartSlice";
import topCatagoriesSlice from "./features/topCatagoriesSlice";
import TrendingProductsSlice from "./features/trendingSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
		user: userSlice,
		authMessage: authMessage,
		featuredData: featuredSlice,
		latestPro: latestProSlice,
		shopexOffer: shopexOfferSlice,
		shop: shopSlice,
		latestBlog: latestBlogSlice,
		brands: getBrands,
		cart: cartSlice,
		topCatagories: topCatagoriesSlice,
		trendingPro: TrendingProductsSlice,
	},
});
