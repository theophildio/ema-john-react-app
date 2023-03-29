import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="Product image" />
            <div className="product-info">
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Product;