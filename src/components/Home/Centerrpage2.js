import React from "react";
import background from '../../images/background.webp'
import '../../style/centerrpage2.css'

function Centerrpage2() {
    return (
        <div className="main_div_page2">
            <div className="center_image">
                <img src={background} style={{ width: '90%', height: "500px", objectFit: "cover" }} />
                <div className="overlay_page3">
                    <h1>Personalize Your Jewellery</h1>
                    <p>
                        Our website offers an exciting feature allowing you to design your jewellery online! Best of all, you can preview it before placing your order to ensure complete satisfaction.
                    </p>
                    <button>ORDER NOW!</button>

                </div>
            </div>
        </div>
    )
}
export default Centerrpage2;