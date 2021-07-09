import React from "react";

const Ordersummary = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header card-title text-center">Order Summary</div>
        <div className="card-body">
          <p className="text-center">items ordered 2</p>
          <div className="row border-bottom">
            <div className="col-8">items</div>
            <div className="col-4 text-end">1</div>
          </div>
          <div className="row border-bottom">
            <div className="col-8">Shipping & Handing</div>
            <div className="col-4 text-end">$ 5.21</div>
          </div>
          <div className="row border-bottom">
            <div className="col-8">Total before tax</div>
            <div className="col-4 text-end">$ 5.21</div>
          </div>
          <div className="row border-bottom">
            <div className="col-8">Estmated tax</div>
            <div className="col-4 text-end">$ 5.21</div>
          </div>
          <div className="row">
            <div className="col-8">Total</div>
            <div className="col-4 text-end">$ 5.21</div>
          </div>

        </div>
        <a href="/" className="btn btn-warning">
            Review your order
          </a>
      </div>
    </div>
  );
};

export default Ordersummary;
