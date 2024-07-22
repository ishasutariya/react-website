import React from "react";
import Products from "./Products";
import Centerrpage4 from "../Home/Centerrpage4";
import Centerrpage6 from "../Home/Centerrpage6";
import Centerrpage3 from "../Home/Centerrpage3";
import Centerrpage from "./Centerrpage";
function Shophome() {
    return (
        <div>
            <Centerrpage />
            <Products />
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </div>
    )
}
export default Shophome;