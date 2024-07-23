import React, { useEffect, useState } from "react";
import Centerrpage from "../Centerrpage";
import Centerrpage4 from "../../Home/Centerrpage4";
import Centerrpage6 from "../../Home/Centerrpage6";
import Centerrpage3 from "../../Home/Centerrpage3";
function Cartilage() {
    const [Cartilages, setCartilages] = useState([])
    const [visibleProducts, setVisibleProducts] = useState(8);


    useEffect(() => {
        fetch("http://localhost:4000/Cartilage")
            .then(res => res.json())
            .then(data => setCartilages(data))
    }, [])
    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };
    return (
        <>
        <Centerrpage/>
            <div className="container">
                <div className="col-md-12">
                    <h1 className="products">Cartilage Piercing Jewellery
                    </h1>
                </div>
                <div className="row product-list">
                    {Cartilages.slice(0, visibleProducts).map(Cartilage => (
                        <div key={Cartilage.id} className="col-12 col-lg-6 product-card">
                            <div className="image-container">
                                <img src={Cartilage.image} alt={Cartilage.name} className="default-image" />
                                <img src={Cartilage.hoverImage} alt={Cartilage.name} className="hover-image" />
                                <div className="hover_card1">
                                    <div className="hover_text1">Add To Cart</div>
                                    <div className="hover_icon1">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details">
                                <p>{Cartilage.subname}</p>
                                <h3>{Cartilage.name}</h3>
                                <p>{Cartilage.price}.<sup>00</sup></p>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleProducts < Cartilages.length && (
                    <div className="show-more-button">
                        <div onClick={handleShowMore}>SHOW MORE</div>
                    </div>
                )}
            </div>
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </>
    )
}
export default Cartilage;