import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shippingCharge = 0;
    for(const product of  cart) {
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }
    const tax = total*15/100;
    const grandTotal = total + shippingCharge + tax;

    return (
        <div>
            <h5>Order summary</h5>
            <div className="cart-details">
                <p>Selected items: {cart.length}</p>
                <p>Total price: ${total}</p>
                <p>Shipping charge: ${shippingCharge}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand total: ${Math.ceil(grandTotal.toFixed(2))}</h4>
            </div>
        </div>
    );
};

export default Cart;