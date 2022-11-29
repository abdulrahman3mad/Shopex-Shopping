import React, { Fragment } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";


function HeaderShop() {
	return (
		<Fragment>
			<header>
				{/* top header */}
				<div className="header__top bg-primary">
					<div className="container">
						<div className="row main-row align-items-center">
							{/* left top <<-*/}
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="top-left-ctn contact-ctn d-flex">
									{/* <!-- mail --> */}
									<a
										href="mailto:xyz@abc.com"
										className="mail-ctn  algin-items-center"
									>
										<CiMail className="icon mail-icon" />
										<span>Hishamk1999@gmail.com</span>
									</a>
									{/* <!-- Phone --> */}
									<a
										href="tel:+201011303410"
										className="tel-ctn  algin-items-center ms-4"
									>
										<TbPhoneCall className="icon telephone-icon " />
										<span>(+20) 1011 3034 10</span>
									</a>
								</div>
							</div>
							{/* right top  ->>*/}
							<div className="col-xl-6 col-lg-6 col-md-6">
								<div className="top-right-ctn d-flex">
									{/* <!-- language --> */}
									<div className="item lang">
										<a href="/">English</a>
										<BiChevronDown className="icon angel-down" />
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

				{/* <div className="nav-ctn">
					<nav className="navbar navbar-expand-lg navbar-light container">
						<a className="navbar-brand" href="../HTML/index.html">
							Hekto
						</a>

						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active-home">
									<a className="nav-link" href="../HTML/index.html">
										Home <span className="sr-only">(current)</span>
										<i className="fa-solid fa-angle-down"></i>
									</a>
								</li>
								<li className="nav-item ">
									<a className="nav-link" href="/">
										Products
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="../HTML/Blog.html">
										Blog
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="../HTML/shop.html">
										Shop
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="../HTML/About-Us.html">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="../HTML/contact.html">
										Contact
									</a>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input
									className="form-control "
									type="search"
									placeholder="Search products"
									aria-label="Search"
								/>
								<button
									className="btn btn-outline-success my-2 my-sm-0"
									type="submit"
								>
									<i className="bi bi-search"></i>
								</button>
							</form>
						</div>
					</nav>
				</div> */}
			</header>
		</Fragment>
	);
}

export default HeaderShop;

//
