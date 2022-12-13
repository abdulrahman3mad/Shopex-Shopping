import WelcomeSE from "../../sections/Welcome/WelcomeSE";
import FeaturedSE from "../../sections/FeaturedProducts/FeaturedSE";
import HeaderNav from "../../sections/UpperBar/UpperBar";
import LatestSE from "../../sections/LatestProducts/LatestSE";
import OfferSE from "../../sections/ShopexOffer/OfferSE";
import FooterSE from "../../sections/Footer/FooterSE";
import LatestBlogSE from "../../sections/LatestBlog/LatestBlogSE";
import BrandsSE from "../../sections/Brands/BrandsSE";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands } from "../../redux-toolkit/features/brandsSlice";

function Home() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.brands);
	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);

	return (
		<>
			<HeaderNav />
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />

			<BrandsSE data={state.data ? state.data : null} />
			<LatestBlogSE />
			<FooterSE />
		</>
	);
}

export default Home;
