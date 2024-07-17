import React from "react";
import Slider from "react-slick";
import '../../style/centerrpage5.css';
import shop_the_look from '../../images/shop_the_look.webp';
import shop_the_look1 from '../../images/shop_the_look1.webp';
import shop_the_look2 from '../../images/shop_the_look2.webp';
import shop_the_look3 from '../../images/shop_the_look3.webp';

function Centerrpage5() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h1>Shop the Look</h1>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <img src={shop_the_look} className="img-fluid" alt="Shop the Look Main" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <Slider {...settings}>
                                <div className="images_container1 col-12 col-lg-4">
                                    <div className="image_container1">
                                        <img src={shop_the_look1} alt="Look 1" />
                                        <div className="hover_text">
                                            <div className="card_overlay">ADD TO CART</div>
                                        </div>
                                    </div>
                                    <div className="image_name1"> Enchanted Opal Fish Tail Ring</div>
                                    <div className="price_title1">
                                        <span className="original_price">₹1,299<sup>.00</sup></span>
                                        <div className="price">₹1,099<sup>.00</sup></div>
                                    </div>
                                </div>
                                <div className="images_container1 col-12 col-lg-4">
                                    <div className="image_container1">
                                        <img src={shop_the_look2} alt="Look 1" />
                                        <div className="hover_text">
                                            <div className="card_overlay">ADD TO CART</div>
                                        </div>
                                    </div>
                                    <div className="image_name1"> Enchanted Opal Fish Tail Ring</div>
                                    <div className="price_title1">
                                        <span className="original_price">₹1,299<sup>.00</sup></span>
                                        <div className="price">₹1,099<sup>.00</sup></div>
                                    </div>
                                </div>
                                <div className="images_container1 col-12 col-lg-4">
                                    <div className="image_container1">
                                        <img src={shop_the_look3} alt="Look 1" />
                                        <div className="hover_text">
                                            <div className="card_overlay">ADD TO CART</div>
                                        </div>
                                    </div>
                                    <div className="image_name1"> Enchanted Opal Fish Tail Ring</div>
                                    <div className="price_title1">
                                        <span className="original_price">₹1,299<sup>.00</sup></span>
                                        <div className="price">₹1,099<sup>.00</sup></div>
                                    </div>
                                </div>
                               
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Centerrpage5;
