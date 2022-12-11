import { Routes, Route } from "react-router-dom";
// pages
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Home from "./pages/Home/Home"
// sections
import HeaderNav from "./sections/UpperBar/UpperBar";

function App() {
	return (
		<div className="App">
			<HeaderNav />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Routes>
		</div>
	);
}

export default App;
