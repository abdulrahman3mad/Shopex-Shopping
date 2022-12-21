import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// pages
import {
	Contact,
	SignUp,
	LogIn,
	NotFound,
	Home,
	Shop,
	FooterSE,
	Dashboard,
	Cart,
} from "pages";
//sections
import { Navbar, UpperBar } from "sections";
import { setUserData } from "redux-toolkit/features/userSlices/userSlice";
import { getCart } from "redux-toolkit/features/cartSlices/cartSlice";

function App() {
	const { user, cart } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUserData());
	}, [dispatch]);

	useEffect(() => {
		if (user && Object.keys(user).length) dispatch(getCart());
	}, [user, dispatch]);
	return (
		<div className="App">
			<UpperBar
				user={user?.user}
				cartProductsCount={cart.cart?.products?.length}
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
			<FooterSE />
		</div>
	);
}

export default App;
