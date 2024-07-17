import React from "react";
import background from '../../images/background.webp'
import '../../style/centerrpage2.css'

function Centerrpage2() {
    return (
        <div className="container">
            <div className="image-container">
                <img src={background} alt="Jewellery" style={{width:"800px"}} className="image" />
            </div>
            {/* <div className="text-container">
                <h1>Personalize Your Jewellery</h1>
                <p>Our website offers an exciting feature allowing you to design your jewellery online! Best of all, you can preview it before placing your order to ensure complete satisfaction.</p>
                <button>Order Now!</button>
            </div> */}
        </div>
    )
}
export default Centerrpage2;