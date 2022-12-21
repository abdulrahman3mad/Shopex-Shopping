// Environment
import React from "react";
import { Link} from "react-router-dom";

// Custome Hooks
import useAddToCart from "Hooks/useAddToCart";

// Components
import {ColorPalette} from "components"
import {Price} from "components";

function FeaProCard({ classNames, product }) {
  const { title, code, price, img, alt } = product;
  const handleAddToCart = useAddToCart();

  return (
    <>
      <div
        className={`card FeaProCard border-0 text-center overflow-hidden ${classNames}`}
      >
        <div className="card-img overflow-hidden position-relative">
          <img src={img} className="card-img-top" alt={alt} />
          <button className="position-absolute" onClick={() => handleAddToCart(product)}>
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
            <Price val={price.toFixed(2)} classNames={"text-white-parent-hover me-2"} />
            <Price
              val={price.toFixed(2)}
              classNames={`text-decoration-line-through ms-2 text-clr-accent old-price`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaProCard;
