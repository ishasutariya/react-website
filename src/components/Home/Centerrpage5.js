import React from "react";
import shop_the_look from '../../images/shop_the_look.webp'
import Slider from "react-slick";
import '../../style/centerrpage5.css'
import shop_the_look1 from '../../images/shop_the_look1.webp'
import shop_the_look2 from '../../images/shop_the_look2.webp'
import shop_the_look3 from '../../images/shop_the_look3.webp'
function Centerrpage5() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
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
    }
    return (
        <div className="container">
            <div style={{margin:"0px 0px 30px 0px"}}>
                <h1>Shop the Look</h1>
            </div>
            <div>
                <div className="center_section">
                    <div className="image_Side1">
                        <img src={shop_the_look} />
                    </div>
                    <div className="slider">
                        <Slider {...settings}>
                            <div>
                                <h3>
                                    <img src={shop_the_look1} />
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    <img src={shop_the_look2} />
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    <img src={shop_the_look3} />
                                </h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Centerrpage5;