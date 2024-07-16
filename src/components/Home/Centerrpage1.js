import React from "react";
import '../../style/centerrpage1.css'

function Centerrpage1() {
    return (
        <div className="main_div_page1">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="heder-text">The Finest Bling</h1>
                    <p className="description">Behold <span>exquisite hypoallergenic</span>  treasures from around the world, delivered to your doorstep!</p>
                    <div>
                        <a href="#"><button>SHOP MINIMAL BLING</button></a>
                    </div>
                </div>
                <div className="wrapper_image">
                    <div className="parent_image">
                        <a href="#"><div className="child bg-one"></div>
                            <div className="image_text">Elefant Jawellery</div>
                        </a> 
                    </div>
                    <div className="parent_image">
                        <a href="#"><div className="child bg-two"></div></a>
                        <div className="image_text">Flower Jawellery</div>
                    </div>
                    <div className="parent_image">
                        <a href="#"><div className="child bg-three"></div></a>
                        <div className="image_text">Love Bands Jewellery</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Centerrpage1
