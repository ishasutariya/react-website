import React, { useEffect, useState } from "react";
function Rings() {
    const [Rings, setRings] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/rings')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setRings(data);
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
                <h1 className="products">Rings</h1>
            </div>
            <div className="row product-list">
                {Rings.slice(0, visibleProducts).map(Ring => (
                    <div key={Ring.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={Ring.image} alt={Ring.name} className="default-image" />
                            <img src={Ring.hoverImage} alt={Ring.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Cart</div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{Ring.subname}</p>
                            <h3>{Ring.name}</h3>
                            <p>{Ring.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < Rings.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default Rings;