import React from "react";
import { LatProCard } from "components";

function LatestSE({ data }) {
  const latestProUI = () => {
    return data
      ? data.map((pro) => {
          return <LatProCard product={pro} key={pro.id} />;
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
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-New-Arrival"
            role="tabpanel"
            aria-labelledby="pills-New-Arrival-tab"
            tabIndex="0"
          >
            <div className="row">{latestProUI()}</div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Best-Seller"
            role="tabpanel"
            aria-labelledby="pills-Best-Seller-tab"
            tabIndex="0"
          >
            <div className="row">{latestProUI()}</div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Featured"
            role="tabpanel"
            aria-labelledby="pills-Featured-tab"
            tabIndex="0"
          >
            <div className="row">{latestProUI()}</div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Special-Offer"
            role="tabpanel"
            aria-labelledby="pills-Special-Offer-tab"
            tabIndex="0"
          >
            <div className="row">{latestProUI()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestSE;
