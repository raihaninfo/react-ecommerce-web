import React, { useState } from 'react';
import fakeData from '../../fakeData'

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10)
    const [products, setProduct] = useState(first10)
    

    return (
        <div className="row">
            <div className="col-md-10">
                <h1>{products.length}</h1>
                <ul>
                    {
                        products.map(products=><li>{products.name}</li>)
                    }
                </ul>
            </div>
            <div className="col-md-2">
                right
            </div>
        </div>
    );
};

export default Shop;