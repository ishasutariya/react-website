import React from "react";
import '../../style/centerrpage4.css';
import solitaire_necklace from '../../images/solitaire_necklace.webp';
import pearl_necklace from '../../images/pearl_necklace.jpg';
import minimal_hoops from '../../images/minimal_hoops.webp';
import vine_Earring from '../../images/vine_Earring.webp';

function Centerrpage4() {
    return (
        <div className="container">
            <div className="page4_title">
                <h1>Blinglane Bestsellers</h1>
            </div>

            <div className="page4_text">
                <p>Our most popular products available to ship from New Delhi Warehouse</p>
            </div>

            <div className="images1">
                <div className="images_section">
                    <div className="image_container">
                        <img src={solitaire_necklace} alt="Solitaire Necklace" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Minimal Solitaire Necklace – Silver</div>
                    <div className="price_title">
                        <span className="original_price">₹1,299<sup>.00</sup></span>
                        <div className="price">₹1,099<sup>.00</sup></div>
                    </div>
                </div>

                <div className="images_section">
                    <div className="image_container">
                        <img src={pearl_necklace} alt="Pearl Necklace" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Minimal Pearl Necklace</div>
                    <div className="price_title">
                        <span className="original_price">₹1,299<sup>.00</sup></span>
                        <div className="price">₹1,099<sup>.00</sup></div>
                    </div>
                </div>

                <div className="images_section">
                    <div className="image_container">
                        <img src={minimal_hoops} alt="Minimal Hoops" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Chic Fins Minimal Hoops</div>
                    <div className="price_title">
                        <span className="original_price">₹1,350<sup>.00</sup></span>
                        <div className="price">₹1,215<sup>.00</sup></div>
                    </div>
                </div>

                <div className="images_section">
                    <div className="image_container">
                        <img src={vine_Earring} alt="Vine Earring" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Dahlia on Vine Earrings</div>
                    <div className="price_title">
                        <span className="original_price">₹1,600<sup>.00</sup></span>
                        <div className="price">₹1,445<sup>.00</sup></div>
                    </div>
                </div>
            </div>
            <div>
                <a href="#"><button className="bt">VIEW MORE</button></a>
            </div>
        </div>
    );
}

export default Centerrpage4;
