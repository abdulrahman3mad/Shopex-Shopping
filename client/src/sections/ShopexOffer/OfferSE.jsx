import React from "react";
import {OfferCard} from "components";

function OfferSE({ data }) {
	const ShopexOfferUI = () => {
		return data
			? data.map((ele) => {
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
