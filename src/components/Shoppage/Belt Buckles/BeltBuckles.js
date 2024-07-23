import React, { useEffect, useState } from "react";
function BeltBuckles() {
    const [BelthBukles, setBelthBukles] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/BeltBuckles')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setBelthBukles(data);
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
                <h1 className="products">BelthBukles</h1>
            </div>
            <div className="row product-list">
                {BelthBukles.slice(0, visibleProducts).map(BelthBukle => (
                    <div key={BelthBukle.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={BelthBukle.image} alt={BelthBukle.name} className="default-image" />
                            <img src={BelthBukle.hoverImage} alt={BelthBukle.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Cart</div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{BelthBukle.subname}</p>
                            <h3>{BelthBukle.name}</h3>
                            <p>{BelthBukle.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < BelthBukles.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default BeltBuckles;