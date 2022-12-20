import React, { Fragment, useState } from "react";
import { BiChevronDown, BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchData } from "../../redux-toolkit/features/shopSlice";

function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const [inputData, setInputData] = useState("");

	function handleSearchInput(e) {
		e.preventDefault();
		dispatch(setSearchData(inputData));
		navigate("/shop")
	}

	return (
		<Fragment>
			<div className="nav-ctn">
				<nav className="navbar navbar-expand-lg container">
					<Link className="navbar-brand" to="/">
						Hekto
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto">
							<li className="nav-item active-home">
								<Link className="nav-link" to="/">
									Home <span className="sr-only"></span>
									<BiChevronDown className="icon angel-down" />
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/shop">
									Shop
								</Link>
							</li>
						</ul>
						<form onSubmit={(e) => handleSearchInput(e)} className="form-inline d-flex" role="search">
							<input
								className="form-control"
								type="search"
								placeholder="Search products"
								aria-label="Search"
								value={inputData}
								onChange={(e) => setInputData(e.target.value)}
							/>
							<button className="btn btn-outline-success" type="submit" >
								<BiSearchAlt className="search-icon" />
							</button>
						</form>
					</div>
				</nav>
			</div>
		</Fragment>
	);
}

export default Navbar;
