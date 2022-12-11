import React from "react";

function OfferCard({ title, description, img, alt }) {
	return (
		<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
			<div className="card offer-card border-0 offer-card mt-3 mb-3 ">
				<div className="card-img text-center">
					<img src={img} alt={alt} />
				</div>
				<div className="card-body text-center">
					<h5 className="card-title fw-bold">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default OfferCard;
