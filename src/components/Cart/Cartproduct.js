import React, { useContext } from "react";
import { CartContext } from "../CartContext/ContextProvider";
import '../../style/cartproduct.css'

const Cartproduct = ({ product }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="container">
            <div className="row d-flex" style={{minHeight:"50px"}}>
                <div className="col-lg-6 mb-3 w-25">
                    <img src={product.image} alt={product.name} className="w-100 h-100 " />
                </div>
                <div className="col-lg-6 mb-3 detail">
                    <h4>{product.name}</h4>
                    <h5>₹{product.price} * {product.quantity}</h5>
                    <div className="buttons">
                        <button
                            onClick={() => dispatch({ type: "Decrease", product })}
                        >
                            <b>-</b>
                        </button>
                        <button >{product.quantity}</button>
                        <button
                            onClick={() => dispatch({ type: "Increase", product })}
                        >
                            <b>+</b>
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => dispatch({ type: "Remove", product })}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartproduct;
