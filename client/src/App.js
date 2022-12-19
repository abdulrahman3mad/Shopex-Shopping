import { Routes, Route } from "react-router-dom";

// pages
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop";
import HeaderNav from "./sections/UpperBar/UpperBar";
import FooterSE from "./sections/Footer/FooterSE";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
	return (
		<div className="App">
			<HeaderNav />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
				<Route path="/dashboard" element={<Dashboard/>}></Route>
			</Routes>
			<FooterSE />
		</div>
	);
}

export default App;
