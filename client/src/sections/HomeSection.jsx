import React, { Fragment } from "react";

function HomeSection() {
	return (
		<Fragment>
			{/* <!-- Home section --> */}
			<section class="home pl-sm-3">
				<div class="home__container">
					<div class="chandeliers d-sm-none d-md-block">
						<img
							src="../IMG/Home_img/Chandelier-Light-Lamp-PNG-Transparent-Image.png"
							alt="chandeliers light lamp"
						/>
					</div>
					<div class="owl-carousel owl-theme" id="home-section">
						<div class="item">
							<div class="row">
								<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 left-side">
									<div class="left-card">
										<p>Best Furniture For Your Castle.....</p>
										<h1>New Furniture Collection Trends in 2020</h1>
										<p class="descr">
											When it comes to searching for first-rate interior design
											tips, tricks, and all-around inspiration it's all too easy
											to get sucked down the rabbit hole of sub-par sites.
										</p>
										<a href="product_details.html" class="btn btn-global">
											Shop Now
										</a>
									</div>
								</div>
								<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div class="right-card">
										<div class="back-img">
											<div class="z-0-img">
												<img
													src="../IMG/Home_img/shape.png"
													alt="background of chair"
												/>
											</div>
											<div class="z-1-img">
												<img
													src="../IMG/Home_img/Grey-Armchair-PNG-File.png"
													alt="Sofa img"
												/>
											</div>
											<div class="z-2-img">
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
						<div class="item">
							<div class="row">
								<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 left-side">
									<div class="left-card">
										<p>Best Furniture For Your Castle.....</p>
										<h1>New Furniture Collection Trends in 2020</h1>
										<p class="descr">
											When it comes to searching for first-rate interior design
											tips, tricks, and all-around inspiration it's all too easy
											to get sucked down the rabbit hole of sub-par sites.
										</p>
										<a href="/HTML/product_details.html" class="btn btn-global">
											Shop Now
										</a>
									</div>
								</div>
								<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div class="right-card">
										<div class="back-img">
											<div class="z-0-img">
												<img
													src="../IMG/Home_img/shape.png"
													alt="background of chair"
												/>
											</div>
											<div class="z-1-img">
												<img
													src="../IMG/Home_img/Grey-Armchair-PNG-File.png"
													alt="Sofa img"
												/>
											</div>
											<div class="z-2-img">
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
