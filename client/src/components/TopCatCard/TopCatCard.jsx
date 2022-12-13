import React from "react";

function TopCatCard({ img, alt, title, price }) {
	return (
		<div className="card TopCatCard p-2 border-0 align-items-center">
			<div className="card-img position-relative overflow-hidden">
				<img src={img} className="card-img-top" alt={alt} />
				<button className="btn btnLink position-absolute text-white">
					Add to cart
				</button>
			</div>
			<div className="card-body">
				<h5 className="card-title mt-3">{title}</h5>
				<p className="card-text fw-semibold">
					<small>${price}</small>
				</p>
			</div>
		</div>
	);
}

export default TopCatCard;
