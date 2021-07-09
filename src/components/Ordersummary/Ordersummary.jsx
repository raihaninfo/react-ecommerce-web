import React from "react";
import "./Ordersummary.css";

const OrderSummary = (props) => {
  const card = props.card;
  console.log(card);
  const totalPrice = card.reduce((total, prd) => total + prd.price, 0);

  let shipping = 0;
  if (totalPrice > 100) {
    shipping = 0;
  } else if (totalPrice > 50) {
    shipping = 2.99;
  } else if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 6.99;
  }

  const tax = totalPrice / 10;
  const grandTotal = totalPrice + Number(tax) + shipping;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header card-title text-center">Order Summary</div>
        <div className="card-body">
          <p className="text-center">items ordered {card.length} </p>
          <div className="row border-bottom">
            <div className="col-8">items</div>
            <div className="col-4 text-end">{card.length}</div>
          </div>
          <div className="row border-bottom">
            <div className="col-7">Product Price</div>
            <div className="col-5 text-end">$ {formatNumber(totalPrice)}</div>
          </div>
          <div className="row border-bottom">
            <div className="col-8">Shipping</div>
            <div className="col-4 text-end">$ {shipping}</div>
          </div>
          <div className="row border-bottom">
            <div className="col-5">Tax + Vat</div>
            <div className="col-7 text-end">$ {formatNumber(tax)}</div>
          </div>

          <div className="row total">
            <div className="col-4">Total</div>
            <div className="col-8 text-end">$ {formatNumber(grandTotal)}</div>
          </div>
        </div>
        <a href="/" className="btn btn-order">
          Review your order
        </a>
      </div>
    </div>
  );
};

export default OrderSummary;
