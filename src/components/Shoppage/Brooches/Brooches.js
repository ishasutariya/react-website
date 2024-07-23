import React, { useEffect, useState } from "react";
import Centerrpage from "../Centerrpage";
import Centerrpage4 from "../../Home/Centerrpage4";
import Centerrpage6 from "../../Home/Centerrpage6";
import Centerrpage3 from "../../Home/Centerrpage3";
function Brooches() {
    const [barooches, setbarooches] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/Brooches")
            .then((res) => res.json())
            .then((result) => setbarooches(result))
    }, [])
    return (
        <>
        <Centerrpage/>
            <div className="container">
                <div className="col-md-12">
                    <h1 className="products">Brooches</h1>
                </div>
                <div className="row product-list">
                    {
                        barooches.map(barooche => (
                            <div key={barooche.id} className="col-12 col-lg-6 product-card">
                                <div className="image-container">
                                    <img src={barooche.image} alt={barooche.name} className="default-image" />
                                    <img src={barooche.hoverImage} alt={barooche.name} className="hover-image" />
                                    <div className="hover_card1">
                                        <div className="hover_text1">Add To Cart</div>
                                        <div className="hover_icon1">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <p>{barooche.subname}</p>
                                    <h3>{barooche.name}</h3>
                                    <p>{barooche.price}.<sup>00</sup></p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </>
    )
}
export default Brooches;