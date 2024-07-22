import React from "react";
import Centerrpage from "../Shoppage/Centerrpage";
import Newarrivals from "./Newarrivals";
import Centerrpage4 from "../Home/Centerrpage4";
import Centerrpage6 from "../Home/Centerrpage6";
import Centerrpage3 from "../Home/Centerrpage3";
function Newarrivalshome(){
    return(
        <div>
            <Centerrpage/>
            <Newarrivals/>
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </div>
    )
}
export default Newarrivalshome;
