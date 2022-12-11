import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OfferCard from "../../components/OfferCard/OfferCard";
import { getShopexOffer } from "../../redux-toolkit/features/shopexOfferSlice";

function OfferSE() {
	const state = useSelector((state) => state.shopexOffer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getShopexOffer());
	}, [dispatch]);

	console.log(state.data ? state.data : null);

	const ShopexOfferUI = () => {
		return state.data
			? state.data.map((ele) => {
					return (
						<OfferCard
							key={ele.id}
							title={ele.title}
							img={ele.img}
							alt={ele.alt}
							description={ele.description}
						/>
					);
			  })
			: null;
	};
	return (
		<section className="shopex-offer section-spacing">
			<div className="container">
				<h2 className="fs-1 text-clr-heading fw-bold text-center mb-5">
					What Shopex Offer!
				</h2>
				<div className="row justify-content-between">{ShopexOfferUI()}</div>
			</div>
		</section>
	);
}

export default OfferSE;
