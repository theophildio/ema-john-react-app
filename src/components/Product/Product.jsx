import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, img, name, price, ratings, seller} = props.product;
    const handleCartBtn = props.handleCartBtn;

    return (
        <div className='product'>
            <img src={img} alt="Product image" />
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <div className="additional-info">
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            <button className='btn-cart' onClick={() => handleCartBtn(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;