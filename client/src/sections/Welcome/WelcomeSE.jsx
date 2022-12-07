import React, { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../redux-toolkit/features/homeDataSlice";

function HomeSection() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.homeData);

	console.log(data.data ? data.data[0] : null);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<Fragment>
			{/* <!-- Home section --> */}
			<section className="home-section1">
				<div className="container h-100">
					<div
						id="carouselExampleIndicators"
						className="carousel slide h-100"
						data-bs-ride="true"
					>
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>

						<div className="carousel-inner h-100">
							<div className="carousel-item active h-100">
								<div className="row h-100">
									{/* left */}
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="left-card d-flex flex-column justify-content-center h-100">
											<span>
												<small className="text-clr-accent">
													Best Furniture For Your Castle.....
												</small>
											</span>
											<h1 className="text-clr-primary">
												New Furniture Collection Trends in 2020
											</h1>
											<p className="">
												When it comes to searching for first-rate interior
												design tips, tricks, and all-around inspiration it's all
												too easy to get sucked down the rabbit hole of sub-par
												sites.
											</p>
											
										</div>
									</div>
									{/* right */}
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12"></div>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="/images/Home_img/Grey-Armchair.png"
									className="d-block w-100"
									alt="Grey-Armchair"
								/>
							</div>
							<div className="carousel-item">
								<img
									src="/images/Home_img/Grey-Armchair.png"
									className="d-block w-100"
									alt="Grey-Armchair"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="home__container">
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
				</div> */}
			</section>
			{/* <!-- End Home section --> */}
		</Fragment>
	);
}

export default HomeSection;
