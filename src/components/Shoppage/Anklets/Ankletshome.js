import React from "react";
import Centerrpage from "../Centerrpage";
import Centerrpage4 from "../../Home/Centerrpage4";
import Centerrpage6 from "../../Home/Centerrpage6";
import Centerrpage3 from "../../Home/Centerrpage3";
import Anklets from "./Anklets";
function Ankletshome(){
    return(
        <div>
            <Centerrpage/>
            <Anklets/>
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </div>
    )
}
export default Ankletshome