import React from "react";
import { Fragment } from "react";
import { FeaProCard } from "components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedSE({ data }) {
  const featuredDataUI = () => {
    return data ? (
      <div className="slider">
        <Slider {...settings}>
          {data.map((prod) => {
            return (
              <FeaProCard
                product={prod}
                key={prod.id}
                classNames="product-shadow"
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 502,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
