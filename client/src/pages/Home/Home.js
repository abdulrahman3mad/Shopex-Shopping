
//Environment
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Sections
import WelcomeSE from "../../sections/Welcome/WelcomeSE";
import FeaturedSE from "../../sections/FeaturedProducts/FeaturedSE";
import LatestSE from "../../sections/LatestProducts/LatestSE";
import OfferSE from "../../sections/ShopexOffer/OfferSE";
import LatestBlogSE from "../../sections/LatestBlog/LatestBlogSE";
import BrandsSE from "../../sections/Brands/BrandsSE";
import NewsletterSE from "../../sections/Newsletter/NewsletterSE";
import TopCatagoriesSE from "../../sections/TopCategories/TopCategoriesSE";
import { getTopCatagories } from "../../redux-toolkit/features/topCatagoriesSlice";
import TrendingProSE from "../../sections/TrendingPro/TrendingProSE";
import { getTrendingProducts } from "../../redux-toolkit/features/trendingSlice";

//Slices
import { getBrands } from "../../redux-toolkit/features/brandsSlice";


function Home() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(getBrands());
		dispatch(getTopCatagories());
		dispatch(getTrendingProducts());
	}, [dispatch]);

	return (
		<>
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />
			<TrendingProSE
				data={state.trendingPro.data ? state.trendingPro.data : null}
			/>

			<TopCatagoriesSE
				data={state.topCatagories.data ? state.topCatagories.data : null}
			/>
			<NewsletterSE />
			<BrandsSE data={state.brands.data ? state.brands.data : null} />
			<LatestBlogSE />
		</>
	);
}

export default Home;
