import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductList = (props) => {
  const { name, img, productBy, price, stock } = props.products;
  return (
    <div className="row border my-4 py-4 product-row text-center">
      <div className="col-md-3">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="col-md-8 m-1">
        <h2 className="h5 text-left">{name}</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="text-left">by {productBy} </p>
            <h5 className="text-left">$ {price} </h5>
            <small className="text-left">
              <p>only {stock} left in stock - order soon</p>
            </small>
          </div>
          <div className="col-md-6">
            <h5 className="text-left">Star</h5>
            <h4 className="text-left">Features</h4>
          </div>
          <button
            className="btn card-btn"
            onClick={() => props.handleAddProduct(props.products)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
