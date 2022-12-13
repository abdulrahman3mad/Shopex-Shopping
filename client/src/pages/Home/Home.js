import WelcomeSE from "../../sections/Welcome/WelcomeSE";
import FeaturedSE from "../../sections/FeaturedProducts/FeaturedSE";
import LatestSE from "../../sections/LatestProducts/LatestSE";
import OfferSE from "../../sections/ShopexOffer/OfferSE";
import LatestBlogSE from "../../sections/LatestBlog/LatestBlogSE";
import BrandsSE from "../../sections/Brands/BrandsSE";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands } from "../../redux-toolkit/features/brandsSlice";
import NewsletterSE from "../../sections/Newsletter/NewsletterSE";
import TopCatagoriesSE from "../../sections/TopCatagories/TopCatagoriesSE";
import { getTopCatagories } from "../../redux-toolkit/features/topCatagoriesSlice";

function Home() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	useEffect(() => {
		dispatch(getBrands());
		dispatch(getTopCatagories());
	}, [dispatch]);

	return (
		<>
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />

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
