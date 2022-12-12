import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaProCard from "../../components/FeaturedProCard/FeaProCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFeaturedData } from "../../redux-toolkit/features/FeaturedDataSlice";

function FeaturedSE() {
	const state = useSelector((state) => state.featuredData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFeaturedData());
	}, [dispatch]);


	const featuredDataUI = () => {
		return state.data ? (
			<div className="slider">
				<Slider {...settings}>
					{state.data.map((prod) => {
						return (
							<FeaProCard
								key={prod.id}
								title={prod.title}
								code={prod.code}
								price={prod.price}
								img={prod.img}
								alt={"plywood arm chair"}
								classNames="product-shadow"
								// "alt": "plywood armchair"
							></FeaProCard>
						);
					})}
				</Slider>
			</div>
		) : null;
	};


	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Fragment>
			<section className="featured sec section-spacing">
				<div className="container">
					<h2 className="text-clr-heading fw-bold fs-1 text-center mb-5">
						Featured Products
					</h2>
					{featuredDataUI()}
				</div>
			</section>
		</Fragment>
	);
}

export default FeaturedSE;
