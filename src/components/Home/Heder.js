import React from "react";
import Slider from "react-slick";
import '../../style/heder.css'
function Header() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <div className="slider-container">
            <Slider {...settings}>
                <div className="text-section">
                    <h3>Click here for Express Delivery Items</h3>
                </div>
                <div className="text-section">
                    <h3>Use Code: BLING10 for 10% Off</h3>
                </div>
                <div className="text-section">
                    <h3>Cash on Delivery (COD) available for Pan India</h3>
                </div>
            </Slider>
        </div>
    );
}
export default Header;
