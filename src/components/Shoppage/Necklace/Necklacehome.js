import React, { useEffect, useState } from "react";
import Necklace from "./Necklace";
import Centerrpage from "../Centerrpage";
import Centerrpage4 from "../../Home/Centerrpage4";
import Centerrpage6 from "../../Home/Centerrpage6";
import Centerrpage3 from "../../Home/Centerrpage3";
function Necklacehome() {
    return (
        <div className="Necklacehome">
            <Centerrpage />
            <Necklace />
            <Centerrpage4/>
            <Centerrpage6/>
            <Centerrpage3/>
        </div>
    )
}
export default Necklacehome