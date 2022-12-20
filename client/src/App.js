import { Routes, Route, useLocation } from "react-router-dom";

// pages
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop";
import HeaderNav from "./sections/UpperBar/UpperBar";
import FooterSE from "./sections/Footer/FooterSE";
import Cart from "./pages/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserData } from "./redux-toolkit/features/userSlices/userSlice";
import { getCart } from "./redux-toolkit/features/cartSlices/cartSlice";


function App() {
	const { user, cart } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUserData());
	}, [])

	useEffect(() => {
		if (user && Object.keys(user).length) dispatch(getCart())
	}, [user])


	return (
		<div className="App" >
			<HeaderNav user={user?.user} cartProductsCount={cart.cart?.products?.length} />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
			<FooterSE />
		</div >
	);
}

export default App;
