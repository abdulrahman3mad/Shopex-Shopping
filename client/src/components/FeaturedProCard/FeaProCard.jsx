// Environment
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Components
import ColorPalette from "../ColorPalette/ColorPalette";
import Price from "../Price/Price";

// Slices
import { addToCart } from "../../redux-toolkit/features/cartSlice";

function FeaProCard({ classNames, product }) {
  const { title, code, price, img, alt } = product;
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    if (!user) navigate("/login");  
    dispatch(addToCart(product));
  }

  return (
    <>
      <div
        className={`card FeaProCard border-0 text-center overflow-hidden ${classNames}`}
      >
        <div className="card-img overflow-hidden position-relative">
          <img src={img} className="card-img-top" alt={alt} />
          <button className="position-absolute" onClick={() => handleAddToCart()}>
            Add To Cart
          </button>
        </div>
        <div className="card-body">
          <h4 className="fw-semibold">{title}</h4>
          <ColorPalette />
          {code && (
            <div className="code mb-3">
              <p className="d-flex align-items-center justify-content-center">
                <>
                  <span>Code</span> <span className="hyphen ms-2 me-2"></span>
                  <Link to={""} className="text-decoration-underline">
                    {code}
                  </Link>
                </>
              </p>
            </div>
          )}
          <div className="d-flex justify-content-center align-items-center">
            <Price val={price} classNames={"text-white-parent-hover"} />
            <Price
              val={price}
              classNames={`text-decoration-line-through ms-2 text-clr-accent old-price`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaProCard;
