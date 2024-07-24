import React, { useContext } from "react";
import { CartContext } from "../CartContext/ContextProvider";
import Cartproduct from "./Cartproduct";
import { totalItem, totalprice } from "../CartContext/CartReducer";


const Cart = () => {
    const { cart } = useContext(CartContext);

    console.log("Total Price:", totalprice(cart)); 
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((product, index) => (
                            <Cartproduct key={index} product={product} />
                        ))
                    )}
                </div>
                <div className="col-12 mt-4">
                    <h5>Total Items: {totalItem(cart)}</h5>
                    <h5>Total Price: ₹{totalprice(cart).toFixed(2)}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;
