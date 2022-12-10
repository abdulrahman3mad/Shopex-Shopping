import React, { useEffect } from "react";
import LatProCard from "../../components/LatestProCard/LatestProCard";
import { useDispatch, useSelector } from "react-redux";
import { getLatestProData } from "../../redux-toolkit/features/latestProSlice";

function LatestSE() {
	const state = useSelector((state) => state.latestPro);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getLatestProData());
	}, [dispatch]);

	const latestProUI = () => {
		return state.data
			? state.data.map((pro) => {
					return (
						<LatProCard
							key={pro.id}
							img={pro.img}
							alt={pro.alt}
							title={pro.title}
							icon={pro.icon}
							altIcon={pro.altIcon}
							price={pro.price}
							discount={pro.discount}
						/>
					);
			  })
			: null;
	};

	return (
		<section className="latest-products section-spacing">
			<div className="container">
				<h2 className="text-clr-heading fw-bold fs-1 text-center mb-5">
					Latest Products
				</h2>
				<ul
					class="nav nav-pills mb-3 justify-content-center"
					id="pills-tab"
					role="tablist"
				>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link active"
							id="pills-New-Arrival-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-New-Arrival"
							type="button"
							role="tab"
							aria-controls="pills-New-Arrival"
							aria-selected="true"
						>
							New Arrival
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link"
							id="pills-Best-Seller-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-Best-Seller"
							type="button"
							role="tab"
							aria-controls="pills-Best-Seller"
							aria-selected="false"
						>
							Best Seller
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link"
							id="pills-Featured-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-Featured"
							type="button"
							role="tab"
							aria-controls="pills-Featured"
							aria-selected="false"
						>
							Featured
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link"
							id="pills-Special-Offer-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-Special-Offer"
							type="button"
							role="tab"
							aria-controls="pills-Special-Offer"
							aria-selected="false"
						>
							Special Offer
						</button>
					</li>
				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div
						class="tab-pane fade show active"
						id="pills-New-Arrival"
						role="tabpanel"
						aria-labelledby="pills-New-Arrival-tab"
						tabindex="0"
					>
						<div className="row">{latestProUI()}</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-Best-Seller"
						role="tabpanel"
						aria-labelledby="pills-Best-Seller-tab"
						tabindex="0"
					>
						<div className="row">{latestProUI()}</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-Featured"
						role="tabpanel"
						aria-labelledby="pills-Featured-tab"
						tabindex="0"
					>
						<div className="row">{latestProUI()}</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-Special-Offer"
						role="tabpanel"
						aria-labelledby="pills-Special-Offer-tab"
						tabindex="0"
					>
						<div className="row">{latestProUI()}</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LatestSE;
