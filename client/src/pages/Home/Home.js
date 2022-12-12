import WelcomeSE from "../../sections/Welcome/WelcomeSE";
import FeaturedSE from "../../sections/FeaturedProducts/FeaturedSE";
import HeaderNav from "../../sections/UpperBar/UpperBar";
import LatestSE from "../../sections/LatestProducts/LatestSE";
import OfferSE from "../../sections/ShopexOffer/OfferSE";
import FooterSE from "../../sections/Footer/FooterSE";

function Home() {
	return (
		<>
			<HeaderNav />
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />

			<FooterSE/>
		</>
	);
}

export default Home;
