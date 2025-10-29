import { useEffect, useState } from "react"
import { ScrollBlur } from "../../../ScrollBlur";
import { CassandraGeneral } from "./CassandraGeneral";
import { CassandraMovement } from "./CassandraMovement";
import { CassandraReactiveFoliage } from "./CassandraReactiveFoliage";
import { CassandraMovementImprovements } from "./CassandraMovementImprovements";

export function Cassandra ({GetProjectCategories, GetPage, GetBackground}) {
    return(
    <div className="min-h-screen w-screen flex">

         <ScrollBlur className="absolute z-3">
            <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-custom-black from-25% to-[0,0,0,0] to-50% z-1 backdrop-blur-sm"></div>    
            <div className="absolute">
                <img src={GetBackground([
                    "./Cassandra/Cave_1.png", 
                    "./Cassandra/Cave_2.png",
                    "./Cassandra/Forest_1.png",
                    "./Cassandra/Forest_2.png"
                    ])} 
                    className="opacity-15 "></img>
            </div>
        </ScrollBlur>
        {GetProjectCategories(
            ["General", 
            "Movement",
            "Reactive Foliage",
            "Movement Improvements"
            ], 
            1,
            "https://apfei.itch.io/cassandra-flame-of-faith")}
        
        <div className="2xl:mt-70 xl:mt-30 mr-28 w-[100%] max-h-screen z-10">
            {GetPage([<CassandraGeneral/>, <CassandraMovement/>, <CassandraReactiveFoliage/>, <CassandraMovementImprovements/>])}
        </div>
    </div>
)
}