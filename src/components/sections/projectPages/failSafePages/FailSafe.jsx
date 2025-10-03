import { useEffect, useState } from "react"
import { ScrollBlur } from "../../../ScrollBlur";
import { FailSafeGeneral } from "./FailSafeGeneral";
import { FailSafeCpp } from "./FailSafeCpp";
import { FailSafeProcedualMesh } from "./FailSafeProcedualMesh";
import { FailSafeColorGrading } from "./FailSafeColorGrading";

export function FailSafe ({GetProjectCategories, GetPage, GetBackground}) {
    return(
    <div className="min-h-screen w-screen flex">

         <ScrollBlur className="absolute z-3">
            <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-custom-black from-25% to-[0,0,0,0] to-50% z-1 backdrop-blur-sm"></div>    
            <div className="absolute ">
                <img src={GetBackground([
                    "./FailSafe/FailSafe_BG_1.png", 
                    "./FailSafe/FailSafe_BG_2.png",
                    "./FailSafe/FailSafe_BG_3.png",
                    "./FailSafe/FailSafe_BG_4.png"
                    ])} 
                    className="opacity-15 min-w-screen max-h-screen object-cover"></img>
            </div>
        </ScrollBlur>
        {GetProjectCategories(
            ["General", 
            "C++",
            "Procedual Mesh",
            "Color Grading"
            ], 2)}
        
        <div className="2xl:mt-70 xl:mt-30 mr-28 w-[100%] max-h-screen z-10">
            {GetPage([<FailSafeGeneral/>, <FailSafeCpp/>, <FailSafeProcedualMesh/>, <FailSafeColorGrading/>])}
        </div>
    </div>
)
}