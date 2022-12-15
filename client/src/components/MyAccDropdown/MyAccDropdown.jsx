import React from "react";
import { useSelector } from "react-redux";
import { BiChevronDown, BiUser } from "react-icons/bi";

function MyAccDropdown() {
	// const  user  = useSelector((state) => state);
	// console.log(user);
	const user = {
		name: "Hisham",
	};
	const myAccountUI = () => {
		return Object.keys(user).length ? (
			<>
				<button
					className="btn dropdown-toggle myAccount__btn border-0"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Hi {user.name}!
					<BiChevronDown className="myAccount__icon   angle-down ms-2" />
				</button>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<hr className="mt-1 mb-1" />
					<li>
						<button className="logOut btn text-center w-100">Sign Out</button>
					</li>
				</ul>
			</>
		) : (
			<>
				{/*<!-- login --> */}
				<div className="item login">
					<a href="../HTML/Login.html">Login</a>
					<BiUser className="icon " />
				</div>
			</>
		);
	};
	return (
		<div className=" myAccount dropdown pointer-event align-items-center d-flex">
			{myAccountUI()}
		</div>
	);
}

export default MyAccDropdown;
