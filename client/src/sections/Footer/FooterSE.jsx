import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { FaPinterestSquare } from "react-icons/fa";
import {FooterTab} from "components";

function FooterSE() {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className="footer">
			{/* main footer */}
			<div className="main-footer section-spacing">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 mb-xs-0">
							<h2 className="fs-1 fw-bold mb-5">Hekto</h2>
							<form action="#" className="mb-4">
								<div className="bg-white">
									<input type="email" placeholder="Email Address" />
									<button className="text-white bg-clr-accent">Sign Up</button>
								</div>
							</form>
							<span>
								Contact Info : <br />
								17 Princess Road, London, Greater London NW1 8JR, UK
							</span>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4 mb-xs-0">
							<h4 className="text-clr-heading mb-5">Catagories</h4>
							<FooterTab
								title={"Laptops & Computers"}
								to={"/Laptops&Computers"}
							/>
							<FooterTab
								title={"Cameras & Photography"}
								to={"/Cameras&Photography"}
							/>
							<FooterTab
								title={"Smart Phones & Tablets"}
								to={"/Smart-Phones&Tablets"}
							/>
							<FooterTab
								title={"Video Games & Consoles"}
								to={"/Video-Games&Consoles"}
							/>
							<FooterTab
								title={"Waterproof Headphones"}
								to={"Waterproof-Headphones"}
							/>
						</div>
						<div className="col-xl-3 col-lg-2 col-md-6 col-sm-12 mb-4 mb-xs-0">
							<h4 className="text-clr-heading mb-5">Customer Care</h4>
							<FooterTab title={"My Account"} to={"/My-Account"} />
							<FooterTab title={"Discount"} to={"/Discount"} />
							<FooterTab title={"Returns"} to={"/Returns"} />
							<FooterTab title={"Orders History"} to={"/Orders-History"} />
							<FooterTab title={"Order Tracking"} to={"Order-Tracking"} />
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4 mb-xs-0">
							<h4 className="text-clr-heading mb-5">Pages</h4>
							<FooterTab title={"Blog"} to={"/Blog"} />
							<FooterTab title={"Browse the Shop"} to={"/Browse-the-Shop"} />
							<FooterTab title={"category"} to={"/category"} />
							<FooterTab title={"Pre-Built Pages"} to={"/Pre-Built-Pages"} />
							<FooterTab
								title={"Visual Composer Elements"}
								to={"/Visual-Composer-Elements"}
							/>
							<FooterTab
								title={"WooCommerce Pages"}
								to={"/WooCommerce-Pages"}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Nav footer */}
			<div className="footer-navbar p-3">
				<div className="container">
					<div className="d-flex justify-content-between flex-column flex-sm-row">
						<div className="copyright mb-2 mb-sm-0">
							<span>Copyright © {year} - All Rights Reserved</span>
						</div>
						<div className="social-media">
							<span className="facebook">
								<a href="https://www.facebook.com" className="text-clr-heading">
									<ImFacebook />
								</a>
							</span>
							<span className="twitter ms-3 me-3">
								<a href="https://twitter.com" className="text-clr-heading">
									<ImTwitter />
								</a>
							</span>
							<span className="instagram me-3">
								<a href="https://instagram.com" className="text-clr-heading">
									<RiInstagramLine />
								</a>
							</span>
							<span className="pinterest">
								<a href="https://pinterest.com" className="text-clr-heading">
									<FaPinterestSquare />
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterSE;
