import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHomeData } from "../redux-toolkit/features/homeDataSlice";

function HomeSection() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHomeData);
	});

	return (
		<Fragment>
			{/* <!-- Home section --> */}
			<section className="home pl-sm-3">
				<div className="home__container">
					<div className="chandeliers d-sm-none d-md-block">
						<img
							src="../IMG/Home_img/Chandelier-Light-Lamp-PNG-Transparent-Image.png"
							alt="chandeliers light lamp"
						/>
					</div>
					<div className="owl-carousel owl-theme" id="home-section">
						<div className="item">
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 left-side">
									<div className="left-card">
										<p>Best Furniture For Your Castle.....</p>
										<h1>New Furniture Collection Trends in 2020</h1>
										<p className="descr">
											When it comes to searching for first-rate interior design
											tips, tricks, and all-around inspiration it's all too easy
											to get sucked down the rabbit hole of sub-par sites.
										</p>
										<a href="product_details.html" className="btn btn-global">
											Shop Now
										</a>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div className="right-card">
										<div className="back-img">
											<div className="z-0-img">
												<img
													src="../IMG/Home_img/shape.png"
													alt="background of chair"
												/>
											</div>
											<div className="z-1-img">
												<img
													src="../IMG/Home_img/Grey-Armchair-PNG-File.png"
													alt="Sofa img"
												/>
											</div>
											<div className="z-2-img">
												<img
													src="../IMG/Home_img/Path 16826.png"
													alt="50% off shape"
												/>
												<p>
													50%
													<br /> off
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 left-side">
									<div className="left-card">
										<p>Best Furniture For Your Castle.....</p>
										<h1>New Furniture Collection Trends in 2020</h1>
										<p className="descr">
											When it comes to searching for first-rate interior design
											tips, tricks, and all-around inspiration it's all too easy
											to get sucked down the rabbit hole of sub-par sites.
										</p>
										<a
											href="/HTML/product_details.html"
											className="btn btn-global"
										>
											Shop Now
										</a>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div className="right-card">
										<div className="back-img">
											<div className="z-0-img">
												<img
													src="../IMG/Home_img/shape.png"
													alt="background of chair"
												/>
											</div>
											<div className="z-1-img">
												<img
													src="../IMG/Home_img/Grey-Armchair-PNG-File.png"
													alt="Sofa img"
												/>
											</div>
											<div className="z-2-img">
												<img
													src="../IMG/Home_img/Path 16826.png"
													alt="50% off shape"
												/>
												<p>
													50%
													<br /> off
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Home section --> */}
		</Fragment>
	);
}

export default HomeSection;
