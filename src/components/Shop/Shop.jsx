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
        const savedCart = [];
        for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleCartBtn = (product) => {
        let newCart = [];
        const existItem = cart.find(item => item.id === product.id);
        if(!existItem) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            existItem.quantity = existItem.quantity + 1;
            const remainingItem = cart.filter(item => item.id !== product.id);
            newCart = [...remainingItem, existItem];
        }
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