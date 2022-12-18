import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux-toolkit/features/cartSlice";

function TopCatCard({ product }) {
  const { img, alt, title, price } = product;
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    if (!user) navigate("/login");
    dispatch(addToCart(product));
  }

  return (
    <div className="card TopCatCard p-2 border-0 align-items-center">
      <div className="card-img position-relative overflow-hidden">
        <img src={img} className="card-img-top" alt={alt} />
        <button
          className="btn btnLink position-absolute text-white"
          onClick={() => handleAddToCart()}
        >
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
