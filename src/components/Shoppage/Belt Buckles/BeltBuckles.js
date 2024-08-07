import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../CartContext/ContextProvider";
function BeltBuckles() {
    const [BelthBukles, setBelthBukles] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);


    const [selectedProduct, setSelectedProduct] = useState(null);

    const { dispatch } = useContext(CartContext);


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

    const handleImageClick = (product) => {
        setSelectedProduct(product);
    };

    const closePopup = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (event, product) => {
        event.stopPropagation();
        dispatch({ type: "Add", product });
    };

    return (
        <div className="container">
            <div className="col-md-12">
                <h1 className="products">BelthBukles</h1>
            </div>
            <div className="row product-list">
                {BelthBukles.slice(0, visibleProducts).map(product => (
                    <div key={product.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container" onClick={() => handleImageClick(product)}>
                            <img src={product.image} alt={product.name} className="default-image" />
                            <img src={product.hoverImage} alt={product.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1" onClick={(event) => handleAddToCart(event, product)}>
                                    Add To Cart
                                </div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{product.subname}</p>
                            <h3>{product.name}</h3>
                            <p>₹{product.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < BelthBukles.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
            {selectedProduct && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <div className="d-flex">
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="m-4 image" />
                            <img src={selectedProduct.hoverImage} alt="Hover" className="m-4 hoverimage" />
                        </div>
                        <h3>{selectedProduct.name}</h3>
                        <p>{selectedProduct.subname}</p>
                        <p>{selectedProduct.price}.<sup>00</sup></p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default BeltBuckles;