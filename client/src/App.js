import { Routes, Route } from "react-router-dom";
// pages
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Home from "./pages/Home/Home"
// sections
import HeaderNav from "./sections/UpperBar/UpperBar";
import WelcomeSE from "./sections/Welcome/WelcomeSE.jsx";
import FeaturedSE from "./sections/FeaturedProducts/FeaturedSE";
import LatestSE from "./sections/LeatestProducts/LatestSE";
import OfferSE from "./sections/ShopexOffer/OfferSE";

import NotFound from "./pages/NotFound/NotFound";


function App() {
	return (
		<div className="App">
			<HeaderNav />
			<WelcomeSE />
			<FeaturedSE />
			<LatestSE />
			<OfferSE />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
