import React from "react";
import shop_part_header from '../../images/shop_part_header.jpg';
import '../../style/informationtop.css'
function Informationtop() {
    return (
        <div className="container">
            <div className="shop_part_header">
                <img src={shop_part_header} className="img-fluid" />
                <div class="centered">
                    <h1>Contact Us</h1>
                    <p>We're here to help. Reach out to us with any questions or concerns using the contact form or stop by for a cup of coffee.</p>
                </div>
            </div>
        </div>
    )
}
export default Informationtop;