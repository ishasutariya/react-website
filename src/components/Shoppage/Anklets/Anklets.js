import React, { useEffect, useState } from "react";
function Anklets() {
    const [Anklets, setAnklets] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/Anklets')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setAnklets(data);
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
                <h1 className="products">Anklets</h1>
            </div>
            <div className="row product-list">
                {Anklets.slice(0, visibleProducts).map(Anklet => (
                    <div key={Anklet.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={Anklet.image} alt={Anklet.name} className="default-image" />
                            <img src={Anklet.hoverImage} alt={Anklet.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Cart</div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{Anklet.subname}</p>
                            <h3>{Anklet.name}</h3>
                            <p>{Anklet.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < Anklets.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default Anklets;