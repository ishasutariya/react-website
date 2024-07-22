import React, { useEffect, useState } from "react";
import '../../style/products.css';

function Products() {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12); 

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/cards')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };

    return (
        <div className="container">
            <div className="col-md-12">
                <h1 className="products">Products</h1>
            </div>
            <div className="row product-list">
                {products.slice(0, visibleProducts).map(product => (
                    <div key={product.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={product.image} alt={product.name} className="default-image" />
                            <img src={product.hoverImage} alt={product.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Cart</div>
                                <div className="hover_icon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{product.subname}</p>
                            <h3>{product.name}</h3>
                            <p>{product.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < products.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    );
}

export default Products;
