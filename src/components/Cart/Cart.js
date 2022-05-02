import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    const total=cart.reduce((total,prd)=>Number(total)+Number(prd),0);
    const total2=total.toFixed(2);


    return (
        <div className='user-summery'>
            <h1>Summery Details</h1>
            <h2>Selected User:{cart.length}</h2>
            <h3>Total Income: $ {total2}</h3>
        </div>
    );
};

export default Cart;