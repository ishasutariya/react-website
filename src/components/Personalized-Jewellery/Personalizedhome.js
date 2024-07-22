import React from "react";
import Centerrpage from '../Shoppage/Centerrpage'
import Personalized from "./Personalized";
import Centerrpage4 from "../Home/Centerrpage4";
import Centerrpage6 from "../Home/Centerrpage6";
import Centerrpage3 from "../Home/Centerrpage3";
function Personalizedhome(){
    return(
        <div>
            <Centerrpage/>
            <Personalized/>
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </div>
    )
}
export default Personalizedhome;