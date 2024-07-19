import React, { useEffect, useState } from "react";
import '../../style/products.css';

function Products() {
    const [products, setProducts] = useState([]);

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

    return (
        <div className="container">
            <div className="col-md-12">
                <h1>Products</h1>
            </div>
            <div className="row product-list">
                {products.map(product => (
                    <div key={product.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={product.image} alt={product.name} className="default-image" />
                            <img src={product.hoverImage} alt={product.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Crad</div>
                                <div className="hover_icon1">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div>
                <button>SHOW MORE</button>
            </div> */}
        </div>
    );
}

export default Products;
