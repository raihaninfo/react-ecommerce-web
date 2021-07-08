import React, { useState } from "react";
import fakeData from "../../fakeData";
import ProductList from "../Product/ProductList";
import "../Shop/Shop.css";

const Shop = () => {
  console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [products, setProduct] = useState(first10);

  return (
    <div className="row">
      <div className="offset-md-1 col-md-9 border-right">
        {products.map((products) => (
          <ProductList
            image={products.img}
            name={products.name}
            productBy={products.seller}
            price={products.price}
            stock={products.stock}
          ></ProductList>
        ))}
      </div>

      <div className="col-md-2">right</div>
    </div>
  );
};

export default Shop;
