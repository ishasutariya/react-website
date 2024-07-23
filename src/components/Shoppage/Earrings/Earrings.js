import React, { useEffect, useState } from "react";
function Earrings() {
    const [earrings, setearrings] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/Earrings')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setearrings(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };
    return (
        <div className="container">
            <div className="col-md-12">
                <h1 className="products">Earrings</h1>
            </div>
            <div className="row product-list">
                {earrings.slice(0, visibleProducts).map(earring => (
                    <div key={earring.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={earring.image} alt={earring.name} className="default-image" />
                            <img src={earring.hoverImage} alt={earring.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Cart</div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{earring.subname}</p>
                            <h3>{earring.name}</h3>
                            <p>{earring.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < earrings.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default Earrings;