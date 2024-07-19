import React from "react";
import Centerrpage from "../Shoppage/Centerrpage";
import Products from "./Products";
// import Centerrpage from "../Home/Centerrpage";
import Centerrpage4 from "../Home/Centerrpage4";
import Centerrpage6 from "../Home/Centerrpage6";
import Centerrpage3 from "../Home/Centerrpage3";
function Shophome() {
    return (
        <div>
            {/* <Centerrpage /> */}
            <Products />
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
            {/* <Centerrpage/> */}
        </div>
    )
}
export default Shophome;