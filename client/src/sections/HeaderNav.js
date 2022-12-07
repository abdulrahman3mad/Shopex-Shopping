import React, { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Mail from "../components/upperBar/Mail";
import Telephone from "../components/upperBar/Telephone";
import Navbar from "../components/navBar/Navbar";

function HeaderNav() {
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
									<div className="item login">
										<a href="../HTML/Login.html">Login</a>
										<BiUser className="icon " />
									</div>
									{/* <!-- wishlist --> */}
									<div className="item Wishlist">
										<a href="/">Wishlist</a>
										<AiOutlineHeart className="icon" />
									</div>
									{/* <!-- shop Cart --> */}
									<div className="item cart">
										<a href="../HTML/Shopping-Cart.html">
											<BsCart3 className=" icon-cart" />
										</a>
										<div className="items-count">
											<a href="../HTML/Shopping-Cart.html" className="zero">
												6
											</a>
										</div>
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
