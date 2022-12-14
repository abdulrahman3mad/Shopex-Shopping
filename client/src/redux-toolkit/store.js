import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authMessage from "./features/authMessage";
import homeSlice from "./features/homeDataSlice";
import latestProSlice from "./features/latestProSlice";
import shopexOfferSlice from "./features/shopexOfferSlice";
import featuredSlice from "./features/FeaturedDataSlice";
import shopSlice from "./features/shopSlice";
import latestBlogSlice from "./features/latestBlogSlice";
import getBrands from "./features/brandsSlice";
import topCatagoriesSlice from "./features/topCatagoriesSlice";
import TrendingProductsSlice from "./features/trendingSlice";

export const store = configureStore({
	reducer: {
		homeData: homeSlice,
		user: authSlice,
		authMessage: authMessage,
		featuredData: featuredSlice,
		latestPro: latestProSlice,
		shopexOffer: shopexOfferSlice,
		shop: shopSlice,
		latestBlog: latestBlogSlice,
		brands: getBrands,
		topCatagories: topCatagoriesSlice,
		trendingPro: TrendingProductsSlice,
	},
});
