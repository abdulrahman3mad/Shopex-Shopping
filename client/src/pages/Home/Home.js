import WelcomeSE from "../../sections/Welcome/WelcomeSE";
import FeaturedSE from "../../sections/FeaturedProducts/FeaturedSE";
import HeaderNav from "../../sections/UpperBar/UpperBar";
import LatestSE from "../../sections/LeatestProducts/LatestSE";
import OfferSE from "../../sections/ShopexOffer/OfferSE";

function Home() {
	return (
		<>
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />
		</>
	);
}

export default Home;
