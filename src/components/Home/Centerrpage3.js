import React from "react";
import '../../style/centerrpage3.css'
import Social1 from '../../images/Social1.avif'
import Social2 from '../../images/Social2.avif'
import Social3 from '../../images/Social3.avif'
import Social4 from '../../images/Social4.avif'
import Social5 from '../../images/Social5.avif'
import Social6 from '../../images/Social6.avif'
import Social7 from '../../images/Social7.avif'
import Social8 from '../../images/Social8.avif'
import Social9 from '../../images/Social9.avif'

function Centerrpage3() {
    return (
        <div className="main_div1">
            <div className="title_text">
                <h1>#Blinglane Social Community</h1>
                <p>Mention Blinglane on Instagram to get featured here</p>
            </div>
            <div className="main_image_section">
                <div className="image_section1">
                    <div className="sub_image_section">
                        <div className="sub_image">
                            <div className="div_container">
                                <img src={Social1} alt="Avatar" className="image" />
                                <div className="overlay_page3">
                                    <i id="text" class="fa-solid fa-arrow-right"></i>
                                    <div className="text">SHOP THIS LOOK</div>
                                </div>
                            </div>
                            <div className="div_container">
                                <img src={Social2} alt="Avatar" className="image" />
                                <div className="overlay_page3">
                                    <i id="text" class="fa-solid fa-arrow-right"></i>
                                    <div className="text">SHOP THIS LOOK</div>
                                </div>
                            </div>
                        </div>
                        <div className="sub_image">
                            <div className="div_container">
                                <img src={Social3} alt="Avatar" className="image" />
                                <div className="overlay_page3">
                                    <i id="text" class="fa-solid fa-arrow-right"></i>
                                    <div className="text">SHOP THIS LOOK</div>
                                </div>
                            </div>
                            <div className="div_container">
                                <img src={Social4} alt="Avatar" className="image" />
                                <div className="overlay_page3">
                                    <i id="text" class="fa-solid fa-arrow-right"></i>
                                    <div className="text">SHOP THIS LOOK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub_image_section1">
                        <div className="div_container">
                            <img src={Social5} alt="Avatar" className="image" />
                            <div className="overlay_page3">
                                <i id="text" class="fa-solid fa-arrow-right"></i>
                                <div className="text">SHOP THIS LOOK</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sub_image_section2">
                        <div className="div_container">
                            <img src={Social6} alt="Avatar" className="image" />
                            <div className="overlay_page3">
                                <i id="text" class="fa-solid fa-arrow-right"></i>
                                <div className="text">SHOP THIS LOOK</div>
                            </div>
                        </div>
                        <div className="div_container">
                            <img src={Social7} alt="Avatar" className="image" />
                            <div className="overlay_page3">
                                <i id="text" class="fa-solid fa-arrow-right"></i>
                                <div className="text">SHOP THIS LOOK</div>
                            </div>
                        </div>
                        <div className="div_container">
                            <img src={Social8} alt="Avatar" className="image" />
                            <div className="overlay_page3">
                                <i id="text" class="fa-solid fa-arrow-right"></i>
                                <div className="text">SHOP THIS LOOK</div>
                            </div>
                        </div>
                        <div className="div_container">
                            <img src={Social9} alt="Avatar" className="image" />
                            <div className="overlay_page3">
                                <i id="text" class="fa-solid fa-arrow-right"></i>
                                <div className="text">SHOP THIS LOOK</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop_button">
                <button>Show More</button>
            </div>
        </div>
    )
}
export default Centerrpage3