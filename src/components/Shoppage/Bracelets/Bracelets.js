import React, { useEffect, useState } from "react";
function Bracelets() {
    const [bracelets, setbracelets] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/Bracelets')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setbracelets(data);
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
                <h1 className="products">Bracelets</h1>
            </div>
            <div className="row product-list">
                {bracelets.slice(0, visibleProducts).map(bracelet => (
                    <div key={bracelet.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={bracelet.image} alt={bracelet.name} className="default-image" />
                            <img src={bracelet.hoverImage} alt={bracelet.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Cart</div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{bracelet.subname}</p>
                            <h3>{bracelet.name}</h3>
                            <p>{bracelet.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < bracelets.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default Bracelets;