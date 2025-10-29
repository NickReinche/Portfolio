import { useEffect, useState } from "react"
import { ScrollBlur } from "../../../ScrollBlur";
import { ConvergenceGeneral } from "./ConvergenceGeneral";
import { ConvergencePostProcess } from "./ConvergencePostProcess";
import { ConvergenceVertex } from "./ConvergenceVertex";
import { ConvergencePCG } from "./ConvergencePCG";

export function Convergence ({GetProjectCategories, GetPage, GetBackground}) {
    return(
    <div className="min-h-screen w-screen flex">

         <ScrollBlur className="absolute z-3">
            <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-custom-black from-25% to-[0,0,0,0] to-50% z-1 backdrop-blur-sm"></div>    
            <div className="absolute">
                <img src={GetBackground([
                    "./Convergence/Convergence_BG_1.png", 
                    "./Convergence/Convergence_BG_2.png",
                    "./Convergence/Convergence_BG_3.png",
                    "./Convergence/Convergence_BG_4.png"
                    ])} 
                    className="opacity-15 min-w-screen max-h-screen object-cover"></img>
            </div>
        </ScrollBlur>
        {GetProjectCategories(
            ["General", 
            "Postprocess",
            "Vertex Painting",
            "Some PCG"
            ], 4, "https://apfei.itch.io/convergence")}
        
        <div className="2xl:mt-70 xl:mt-30 mr-28 w-[100%] max-h-screen z-10">
            {GetPage([<ConvergenceGeneral/>, <ConvergencePostProcess/>, <ConvergenceVertex/>, <ConvergencePCG/>])}
        </div>
    </div>
)
}