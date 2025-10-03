import { useEffect, useState } from "react"
import { ScrollBlur } from "../../../ScrollBlur";
import { WhimsicalGeneral } from "./WhimsicalGeneral";
import { WhimsicalLevelGeneration } from "./WhimsicalLevelGeneration";
import { WhimsicalCorridor } from "./WhimsicalCorridor";
import { WhimsicalDrawingSystem } from "./WhimsicalDrawingSystem";
import { WhimsicalMultiplayer } from "./WhimsicalMultiplayer";

export function Whimsical ({GetProjectCategories, GetPage, GetBackground}) {
    return(
    <div className="min-h-screen w-screen flex">

         <ScrollBlur className="absolute z-3">
            <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-custom-black from-25% to-[0,0,0,0] to-50% z-1 backdrop-blur-sm"></div>    
            <div className="absolute">
                <img src={GetBackground([
                    "./Whimsical/Whimsical_BG_1.png", 
                    "./Whimsical/Whimsical_BG_2.png",
                    "./Whimsical/Whimsical_BG_3.png",
                    "./Whimsical/Whimsical_BG_4.png",
                    "./Whimsical/Whimsical_BG_5.png"
                    ])} 
                    className="opacity-25 min-w-screen max-h-screen object-cover"></img>
            </div>
        </ScrollBlur>
        {GetProjectCategories(
            ["General", 
            "Room Generation",
            "Corridors",
            "Drawing System",
            "Multiplayer"
            ], 0)}
        
        <div className="2xl:mt-70 xl:mt-30 mr-28 w-[100%] max-h-screen z-10">
            {GetPage([<WhimsicalGeneral/>, <WhimsicalLevelGeneration/>, <WhimsicalCorridor/>, <WhimsicalDrawingSystem/>, <WhimsicalMultiplayer/>])}
        </div>
    </div>
)
}