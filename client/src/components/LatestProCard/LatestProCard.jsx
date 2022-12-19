import React from "react";
import Price from "../Price/Price";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import useAddToCart from "../../Hooks/useAddToCart";

function LatProCard({product}) {
  const { img, alt, title, icon, altIcon, price, discount } = product;
  const handleAddToCart = useAddToCart();

  return (
    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
      <div className="card border-0 latProCard">
        <div className="card-img p-5 position-relative overflow-hidden text-center">
          <img src={img} className="card-img-top w-75" alt={alt} />
          <div className="overlay-icons position-absolute d-flex flex-column justify-content-around">
            <img src={icon} alt={altIcon} />
            <div className="d-flex flex-column align-items-center">
              <button
                className="icon-btn mb-3"
                onClick={() => handleAddToCart(product)}
              >
                <BsFillCartPlusFill />
              </button>
              <button className="icon-btn">
                <BsSuitHeart />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <a href="/product-details" className="card-title fw-semibold">
              {title}
            </a>
            <span className="d-flex align-content-center ">
              <Price val={price} className={"mb-0"} />
              <s className="text-clr-accent fs-9 d-flex align-content-center ms-3">
                <small>${discount}</small>
              </s>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatProCard;
