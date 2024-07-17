import React from "react";
import '../../style/centerrpage1.css'
import elefant from '../../images/elefant.webp'
import flower from '../../images/flower.webp'
import ring_image from '../../images/ring_image.webp'

function Centerrpage1() {
    return (
        <div className="main_div_page1">
            <h1 className="heder-text">The Finest Bling</h1>
            <p className="description">Behold <span>exquisite hypoallergenic</span>  treasures from around the world, delivered to your doorstep!</p>
            <div>
                <a href="#"><button>SHOP MINIMAL BLING</button></a>
            </div>
            <div className="row">
                <div className="card col-12 col-lg-4">
                    <div className="image">
                        <img src={elefant} />
                    </div>
                    <div className="figcaption">
                        <div className="image_text">Flower Jawellery</div>
                    </div>
                </div>
                <div className="card col-12 col-lg-4">
                    <div className="image">
                        <img src={flower} />
                    </div>
                    <div className="figcaption">
                        <div className="image_text">Flower Jawellery</div>
                    </div>
                </div>
                <div className="card col-12 col-lg-4">
                    <div className="image">
                        <img src={ring_image} />
                    </div>
                    <div className="figcaption">
                        <div className="image_text">Flower Jawellery</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Centerrpage1

// <div className="">
//     <div className="parent_image col-12 col-lg-4">
//         <a href="#"><div className="child bg-one"></div>
//             <div className="image_text">Elefant Jawellery</div>
//         </a>
//     </div>
//     <div className="parent_image col-12 col-lg-4">
//         <a href="#"><div className="child bg-two"></div></a>
//         <div className="image_text">Flower Jawellery</div>
//     </div>
//     <div className="parent_image col-12 col-lg-4">
//         <a href="#"><div className="child bg-three"></div></a>
//         <div className="image_text">Love Bands Jewellery</div>
//     </div>
// </div>