import React, { memo } from "react";
import TopCatCard from "../../components/TopCatCard/TopCatCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopCategoriesSE({ data }) {
  const TopCategoriesUI = () => {
    return data
      ? data.map((ele) => {
          return <TopCatCard product={ele} key={ele.id}/>;
        })
      : null;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
    <section className="top-catagories section-spacing text-center">
      <div className="container">
        <h2 className="fs-1 fw-bold text-clr-heading mb-5">Top Catagories</h2>
        <Slider {...settings}>{TopCategoriesUI()}</Slider>
      </div>
    </section>
  );
}

export default memo(TopCategoriesSE);
