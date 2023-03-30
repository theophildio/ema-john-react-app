import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    return (
        <section className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='orders'>
                <h5>Order summary</h5>
                <div className="cart-details">
                    <p>Selected items: </p>
                    <p>Total price: $</p>
                    <p>Shipping charge: $</p>
                    <p>Tax: $</p>
                    <h4>Grand total: $</h4>
                </div>
            </div>
        </section>
    );
};

export default Shop;