import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Mail from "../../components/Mail/Mail";
import Telephone from "../../components/Telephone/Telephone";
import Navbar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux-toolkit/features/userSlice";

function HeaderNav({ user, cartProductsCount }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleLogout(e) {
		e.preventDefault();
		dispatch(logout());
		navigate("/");
	}

	return (
		<Fragment>
			<header>
				{/* top header */}
				<div className="header__top bg-clr-primary">
					<div className="container">
						<div className="row main-row align-items-center">
							{/* left top <<-*/}
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="top-left-ctn contact-ctn d-flex">
									{/* <!-- mail --> */}
									<Mail />
									{/* <!-- Phone --> */}
									<Telephone />
								</div>
							</div>
							{/* right top  ->>*/}
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="top-right-ctn d-flex">
									{/* <!-- language --> */}
									<div className="item lang">
										<a href="/">English</a>
										<BiChevronDown className="icon angle-down" />
										<div className="menu-drop lang-drop">
											<ul>
												<li>
													<a href="/">French</a>
												</li>
												<li>
													<a href="/">German</a>
												</li>
												<li>
													<a href="/">Chines</a>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- currency --> */}
									<div className="item usd">
										<a href="/">USD</a>
										<BiChevronDown className="icon angle-down" />
										<div className="menu-drop usd-drop">
											<ul>
												<li>
													<a href="/">EUR</a>
												</li>
												<li>
													<a href="/">JPY</a>
												</li>
												<li>
													<a href="/">GBP</a>
												</li>
											</ul>
										</div>
									</div>
									{/*<!-- login --> */}
									<div className="item login d-flex align-items-center text-white">
										{(user && Object.keys(user).length > 0) ? <Link onClick={(e) => handleLogout(e)}>Logout</Link> : <Link to="/login">Login</Link>}
										<BiUser className="icon" />
										{user && <p className="p-0 m-0 fs-9">{user.name}</p>}
									</div>
									{/* <!-- wishlist --> */}
									<div className="item Wishlist">
										<a href="/">Wishlist</a>
										<AiOutlineHeart className="icon" />
									</div>
									{/* <!-- shop Cart --> */}
									<div className="item cart">
										<Link to="/cart">
											<BsCart3 className="icon-cart" />
											{cartProductsCount > 0 && <span className="items-count">{cartProductsCount}</span>}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Navbar />
			</header>
		</Fragment>
	);
}

export default HeaderNav;
