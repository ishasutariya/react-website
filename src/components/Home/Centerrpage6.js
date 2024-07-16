import React from "react";
import Shop_new from '../../images/Shop_new.webp'
import Shop_new1 from '../../images/Shop_new1.webp'
import Shop_new2 from '../../images/Shop_new2.webp'
import Shop_new3 from '../../images/Shop_new3.webp'
function Centerrpage6() {
    return (

        <div className="container">
            <h1 className="title_h1" style={{fontSize:"30px", fontFamily:"cursive"}}>Shop New Arrivals by Blinglane</h1>
            <div className="images1">
                <div className="images_section">
                    <div className="image_container">
                        <img src={Shop_new} alt="Solitaire Necklace" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Stay Forever In My Heart Hoops Regular price</div>
                    <div className="price_title">
                        <span className="original_price">₹1,299<sup>.00</sup></span>
                        <div className="price">₹1,099<sup>.00</sup></div>
                    </div>
                </div>

                <div className="images_section">
                    <div className="image_container">
                        <img src={Shop_new1} alt="Pearl Necklace" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Adorable Aqua Mini Studs</div>

                    <div className="price_title">
                        <span className="original_price">₹1,299<sup>.00</sup></span>
                        <div className="price">₹1,099<sup>.00</sup></div>
                    </div>
                </div>

                <div className="images_section">
                    <div className="image_container">
                        <img src={Shop_new2} alt="Minimal Hoops" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">I Make My Own Luck Drop Hoops</div>
                    <div className="price_title">
                        <span className="original_price">₹1,350<sup>.00</sup></span>
                        <div className="price">₹1,215<sup>.00</sup></div>
                    </div>
                </div>

                <div className="images_section">
                    <div className="image_container">
                        <img src={Shop_new3} alt="Vine Earring" />
                        <div className="overlay">
                            <div className="title">ADD TO CART</div>
                            <div className="icon_title">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="image_name">Snazzy Chic Huggie Ear Cuffs</div>
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
    )
}
export default Centerrpage6