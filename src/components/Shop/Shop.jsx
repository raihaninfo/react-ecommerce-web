import React, { useState } from "react";
import fakeData from "../../fakeData";
import OrderSummary from "../OrderSummary/OrderSummary";
import ProductList from "../Product/ProductList";
import "../Shop/Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products] = useState(first10);
  const [card, setCard] = useState([]);

  const handleAddProduct = (products) => {
    const newCart = [...card, products];
    setCard(newCart);
  };

  return (
    <div className="row">
      <div className="offset-md-1 col-md-9 border-right">
        {products.map((products) => (
          <ProductList
            handleAddProduct={handleAddProduct}
            products={products}
            key={products.key}
          ></ProductList>
        ))}
      </div>

      <div className="col-md-2">
        <OrderSummary card={card}></OrderSummary>
      </div>
    </div>
  );
};

export default Shop;
