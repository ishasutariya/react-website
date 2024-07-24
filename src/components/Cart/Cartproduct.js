import React, { useContext } from "react";
import { CartContext } from "../CartContext/ContextProvider";
import '../../style/cartproduct.css'

const Cartproduct = ({ product }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="d-flex">
            <img src={product.image} alt={product.name} className="w-25 h-25 m-4" />
            <div className="detail mt-5">
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
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
                        className="btn btn-danger ml-2"
                        onClick={() => dispatch({ type: "Remove", product })}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cartproduct;
