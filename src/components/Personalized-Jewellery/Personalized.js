import React, { useEffect, useState } from "react";


function Personalized() {
    const [Personalize, setPersonalized] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/PersonalizedJewellery")
            .then((res) => res.json())
            .then((result) => setPersonalized(result))
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className="container">
            <div>
                <h3>Personalized Jewellery</h3>
            </div>
            <div className="row product-list">
                {Personalize.map(personalize => (
                    <div key={personalize.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={personalize.image} alt={personalize.name} className="default-image" />
                            <img src={personalize.hoverImage} alt={personalize.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Crad</div>
                                <div className="hover_icon1">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{personalize.name}</h3>
                            <p>{personalize.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Personalized;