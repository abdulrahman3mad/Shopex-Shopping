import React, { Fragment } from "react";
import { LinkComp } from "components";

function HomeSection({ data }) {
	const WelcomeUI = () => {
		return data ? (
			<>
				<div className="chandeliers position-absolute">
					<img
						className="w-25"
						src={data.welcome_Chandelier.image}
						alt="chandeliers light lamp"
					/>
				</div>
				<div className="container h-100">
					<div
						id="carouselExampleIndicators"
						className="carousel slide h-100"
						data-bs-ride="true"
					>
						{/* Carousal Buttons */}
						<div className="carousel-indicators mb-5">
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
						{/* Carousal cards */}
						<div className="carousel-inner h-100">
							{data.welcome_data.map((ele) => {
								return (
									<div className={ele.className} key={ele.id}>
										<div className="row h-100">
											{/* left */}
											<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
												<div className="left-card d-flex flex-column justify-content-center h-100 ps-2">
													<span>
														<small className="text-clr-accent">
															{ele.subtitle}
														</small>
													</span>
													<h1 className="text-clr-primary mb-4">{ele.title}</h1>
													<p className="mb-4">{ele.description}</p>
													<span>
														<LinkComp to={"/Shop"} val={"Shop Now"} />
													</span>
												</div>
											</div>
											{/* right */}
											<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-none d-xl-block d-lg-block">
												<div className="right-card h-100 d-flex justify-content-center align-items-center">
													<img
														src={ele.image}
														className="d-block w-75"
														alt="Grey-Armchair"
													/>
													{/* discount */}
													<div className="discount position-relative"></div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</>
		) : null;
	};
  return (
    <Fragment>
      {/* <!-- Home section --> */}
      <section className="home-section1 position-relative overflow-hidden">
        {WelcomeUI()}
      </section>
      {/* <!-- End Home section --> */}
    </Fragment>
  );
}

export default HomeSection;
