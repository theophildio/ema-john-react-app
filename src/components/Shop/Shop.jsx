import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
    }, []);

    const handleCartBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    
    return (
        <section className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCartBtn = {handleCartBtn}
                    ></Product>)
                }
            </div>
            <div className='orders'>
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Shop;