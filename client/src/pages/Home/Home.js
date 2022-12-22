//Environment
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";

//Sections
import {
	WelcomeSE,
	FeaturedSE,
	LatestProductsSE,
	ShopexOffer,
	TrendingProSE,
	TopCategoriesSE,
	NewsletterSE,
	BrandsSE,
	LatestBlogSE,
} from "sections";

//component
import { Loader } from "components";

//Slices AsyncThunk
import {
	getWelcomeData,
	getFeaturedData,
	getLatestProData,
	getShopexOffer,
	getTrendingProducts,
	getTopCatagories,
	getBrands,
} from "../../redux-toolkit/features";

function Home() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(getWelcomeData());
		dispatch(getFeaturedData());
		dispatch(getLatestProData());
		dispatch(getShopexOffer());
		dispatch(getBrands());
		dispatch(getTopCatagories());
		dispatch(getTrendingProducts());
	}, [dispatch]);

	return (
		<>
			{/* <Loader /> */}
			<WelcomeSE data={state.homeData.data ? state.homeData.data : null} />
			<FeaturedSE
				data={state.featuredData.data ? state.featuredData.data : null}
			/>
			<LatestProductsSE
				data={state.latestPro.data ? state.latestPro.data : null}
			/>
			<ShopexOffer
				data={state.shopexOffer.data ? state.shopexOffer.data : null}
			/>
			<TrendingProSE
				data={state.trendingPro.data ? state.trendingPro.data : null}
			/>

			<TopCategoriesSE
				data={state.topCatagories.data ? state.topCatagories.data : null}
			/>
			<NewsletterSE />
			<BrandsSE data={state.brands.data ? state.brands.data : null} />
			<LatestBlogSE />
		</>
	);
}

export default memo(Home);
