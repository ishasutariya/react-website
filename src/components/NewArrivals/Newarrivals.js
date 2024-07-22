import React, { useEffect, useState } from 'react'
import '../../style/products.css';

function Newarrivals() {
    const [NewArrivals, setNewArrivals] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);


    useEffect(() => {
        console.log('Fetching data from server...');
        fetch('http://localhost:4000/NewArrivals')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setNewArrivals(data);
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
                <h1 className="NewArrivals">New Arrivals</h1>
            </div>
            <div className="row product-list">
                {NewArrivals.slice(0,visibleProducts).map(NewArrival => (
                    <div key={NewArrival.id} className="col-12 col-lg-6 product-card">
                        <div className="image-container">
                            <img src={NewArrival.image} alt={NewArrival.name} className="default-image" />
                            <img src={NewArrival.hoverImage} alt={NewArrival.name} className="hover-image" />
                            <div className="hover_card1">
                                <div className="hover_text1">Add To Crad</div>
                                <div className="hover_icon1">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <p>{NewArrival.subname}</p>
                            <h3>{NewArrival.name}</h3>
                            <p>{NewArrival.price}.<sup>00</sup></p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < NewArrivals.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}

export default Newarrivals
