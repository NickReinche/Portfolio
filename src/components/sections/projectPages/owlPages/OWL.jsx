import { useEffect, useState } from "react"
import { ScrollBlur } from "../../../ScrollBlur";
import { OWLGeneral } from "./OWLGeneral";
import { OWLMultiplayer } from "./OWLMultiplayer";
import { OWLLVL } from "./OWLLVL";

export function OWL ({GetProjectCategories, GetPage, GetBackground}) {
    return(
    <div className="min-h-screen w-screen flex">

         <ScrollBlur className="absolute z-3">
            <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-custom-black from-25% to-[0,0,0,0] to-50% z-1 backdrop-blur-sm"></div>    
            <div className="absolute">
                <img src={GetBackground([
                    "./OWL/OWL_BG_4.png", 
                    "./OWL/OWL_BG_5.png",
                    "./OWL/OWL_BG_3.png",
                    "./OWL/OWL_BG_4.png"
                    ])} 
                    className="opacity-15 min-w-screen max-h-screen object-cover"></img>
            </div>
        </ScrollBlur>
        {GetProjectCategories(
            ["General", 
            "Multiplayer",
            "LVLs"
            ], 3, "https://store.steampowered.com/app/3416680/OWL__One_Wave_Length")}
        
        <div className="2xl:mt-70 xl:mt-30 mr-28 w-[100%] max-h-screen z-10">
            {GetPage([<OWLGeneral/>, <OWLMultiplayer/>, <OWLLVL/>])}
        </div>
    </div>
)
}