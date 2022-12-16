
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

//Slices
import { getBrands } from "../../redux-toolkit/features/brandsSlice";


function Home() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.brands);

	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);


	return (
		<>
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />

			<NewsletterSE />
			<BrandsSE data={state.data ? state.data : null} />
			<LatestBlogSE />
		</>
	);
}

export default Home;
