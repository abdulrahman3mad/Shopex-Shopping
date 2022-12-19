import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux-toolkit/features/cartSlice";
import useAddToCart from "../../Hooks/useAddToCart";

function TrendingProCard({product}) {
	
  const { img, alt, title, price, discount } = product;
  const handleAddToCart = useAddToCart();

  return (
    <div className="TrendingProCard col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3 mb-sm-0">
      <div className="card border-0">
        <div className="card-img position-relative overflow-hidden">
          <img src={img} alt={alt} className={"card-img-top"} />
          <div className="icons position-absolute top-0 d-flex flex-column">
            <button
              className="cart d-flex align-items-center justify-content-center mb-3 mt-4 border-0"
              onClick={() => handleAddToCart(product)}
            >
              <BsCartPlusFill />
            </button>
            <button className="heart d-flex align-items-center justify-content-center  border-0">
              <BiHeart />
            </button>
          </div>
        </div>
        <div className="card-body text-center">
          <button className="btn">
            <h5 className="card-title mb-3 mt-3 fw-bold text-clr-heading position-relative">
              {title}
            </h5>
          </button>
          <div className="prices d-flex justify-content-center align-items-center">
            <span className="me-3">
              <strong>${price}</strong>
            </span>
            <small>
              <s>${discount}</s>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProCard;
