import { Routes, Route } from "react-router-dom";
// pages
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"

// sections
import HeaderNav from "./sections/UpperBar/UpperBar";
import Products from "./pages/Products/Products";

function App() {
	return (
		<div className="App">
			<HeaderNav />			
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
				<Route path="/products" element={<Products />}></Route>
			</Routes>
		</div>
	);
}

export default App;
