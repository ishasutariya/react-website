import React, { useEffect, useState } from "react";
function Expressdelivery() {
    const [express, setexpress] = useState([])

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

    return (
        <div className="container">
            <div className="express">
                <h3>Personalized Jewellery     </h3>
            </div>
            <div className="row product-list">
                {express.map(expres => (
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
                            <h3>{expres.name}</h3>
                            <p>{expres.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Expressdelivery;