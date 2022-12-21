import React, { memo } from "react";
import { TrendingProCard } from "components";
import { Link } from "react-router-dom";

function TrendingProSE({ data }) {
  const trendingProUI = () => {
    return data ? (
      <>
        <div className="row">
          {data.cardData.map((pro) => {
            return <TrendingProCard product={pro} key={pro.id} />;
          })}
        </div>
        <div className="trending-products__bottom mt-4 row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-0 mb-sm-4">
            {
              <div className="left-ctn p-4 rounded-2">
                <h4 className="fw-bold mb-3">{data.discountPro50.title}</h4>
                <span>
                  <Link
                    to={"/shop"}
                    className={
                      "text-clr-accent text-decoration-underline accent-clr-hover"
                    }
                  >
                    Shop Now
                  </Link>
                </span>
                <div className="img-ctn text-end">
                  <img
                    src={data.discountPro50.img}
                    className="img-fluid w-50"
                    alt={data.discountPro50.alt}
                  />
                </div>
              </div>
            }
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            {
              <div className="right-ctn p-4 rounded-2">
                <h4 className="fw-bold mb-3">{data.discountPro25.title}</h4>
                <span>
                  <Link
                    to={"/shop"}
                    className={
                      "text-clr-accent text-decoration-underline accent-clr-hover"
                    }
                  >
                    Shop Now
                  </Link>
                </span>
                <div className="img-ctn text-end">
                  <img
                    src={data.discountPro25.img}
                    className="img-fluid w-50"
                    alt={data.discountPro25.alt}
                  />
                </div>
              </div>
            }
          </div>
        </div>
      </>
    ) : null;
  };
  return (
    <section className="trending-products section-spacing">
      <div className="container">
        <h2 className="fw-bold fs-1 text-clr-heading text-center mb-5">
          Trending Products
        </h2>
        {/* top 4 cards */}
        {trendingProUI()}
      </div>
    </section>
  );
}
export default memo(TrendingProSE);
