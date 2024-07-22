import React, { useEffect, useState } from "react";
// import '../../style/products.css';

function Necklace() {

    const [necklaces, setnecklaces] = useState([])
    const [visibleProducts, setVisibleProducts] = useState(12);


    useEffect(() => {
        fetch('http://localhost:4000/Necklace')
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                setnecklaces(data);
            })
            .catch(error => {
                console.log(error);
            })
    })
    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };
    return (
        <div className="container">
            <div className="col-md-12">
                <h1 className="products">Necklace</h1>
            </div>
            <div className="row product-list">
                {necklaces.slice(0, visibleProducts).map(necklace => (
                <div key={necklace.id} className="col-12 col-lg-6 product-card">
                    <div className="image-container">
                        <img src={necklace.image} alt={necklace.name} className="default-image" />
                        <img src={necklace.hoverImage} alt={necklace.name} className="hover-image" />
                        <div className="hover_card1">
                            <div className="hover_text1">Add To Crad</div>
                            <div className="hover_icon1">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <p>{necklace.subname}</p>
                        <h3>{necklace.name}</h3>
                        <p>{necklace.price}.<sup>00</sup></p>
                    </div>
                </div>
                ))}
            </div>
            {visibleProducts < necklaces.length && (
                <div className="show-more-button">
                    <div onClick={handleShowMore}>SHOW MORE</div>
                </div>
            )}
        </div>
    )
}
export default Necklace;