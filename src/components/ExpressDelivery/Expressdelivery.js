import React, { useEffect, useState } from "react";
function Expressdelivery() {
    const [express, setexpress] = useState([])
    const [visibleProducts, setVisibleProducts] = useState(12);


    useEffect(() => {
        fetch("http://localhost:4000/ExpressDelivery")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setexpress(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };
    return (
        <div className="container">
            <div className="express">
                <h3>Jewellery</h3>
            </div>
            <div className="row product-list">
                {express.slice(0,visibleProducts).map(expres => (
                    <div key={expres.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={expres.image} alt={expres.name} className="default-image" />
                            <img src={expres.hoverImage} alt={expres.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Crad</div>
                                <div className="hover_icon1">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{expres.subname}</p>
                            <h3>{expres.name}</h3>
                            <p>{expres.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}

            </div>
            {visibleProducts < express.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default Expressdelivery;