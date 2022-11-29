import React, { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";

function Navbar() {
	return (
		<Fragment>
			<div className="nav-ctn">
				<nav className="navbar navbar-expand-lg container">
					<a className="navbar-brand" href="../HTML/index.html">
						Hekto
					</a>

					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active-home">
								<a className="nav-link" href="../HTML/index.html">
									Home <span className="sr-only"></span>
									<BiChevronDown className="icon angel-down" />
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
			</div>
		</Fragment>
	);
}

export default Navbar;
