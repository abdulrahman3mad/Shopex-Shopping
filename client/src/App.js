import { Routes, Route } from "react-router-dom";
// pages
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Home from "./pages/Home/Home";

import NotFound from "./pages/NotFound/NotFound";
import HeaderNav from "./sections/UpperBar/UpperBar";
import FooterSE from "./sections/Footer/FooterSE";

function App() {
	return (
		<div className="App">
			<HeaderNav />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<FooterSE />
		</div>
	);
}

export default App;
