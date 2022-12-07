import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import HeaderNav from "./sections/UpperBar/UpperBar";
import WelcomeSE from "./sections/Welcome/WelcomeSE.jsx";

function App() {
	return (
		<div className="App">
			<HeaderNav />
			<WelcomeSE />
			<Routes>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Routes>
		</div>
	);
}

export default App;
