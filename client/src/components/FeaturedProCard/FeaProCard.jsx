import React from "react";
import { Link } from "react-router-dom";
import ColorPalette from "../ColorPalette/ColorPalette";
import Price from "../Price/Price";
import LinkComp from "../Link/LinkComp";

function FeaProCard({ title, code, price, img, alt, classNames }) {
  console.log(code);
  return (
    <>
      <div
        className={`card FeaProCard border-0 text-center overflow-hidden ${classNames}`}
      >
        <div className="card-img overflow-hidden position-relative">
          <img src={img} className="card-img-top" alt={alt} />
          <LinkComp
            to={"/productDetails"}
            val={"View Details"}
            className={"position-absolute"}
          />
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
            <Price val={price} />
            <Price
              val={price}
              classNames={`text-decoration-line-through ms-2 text-clr-accent`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaProCard;
