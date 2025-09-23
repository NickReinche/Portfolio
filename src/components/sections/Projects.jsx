import { useEffect, useState } from "react"
import { ScrollReveal } from "../ScrollReveal";
import { AllProjects } from "./projectPages/AllProjects";
import { Cassandra } from "./projectPages/Cassandra";

export const Projects = () => {

    const [selectedGame, setSelectedGame] = useState(1);
    
    const [selectedGameDetails, setSelectedGameDetails] = useState("");

    useEffect(() => {
    console.log(selectedGameDetails);
return;
    }, [selectedGameDetails])
    function GetBorderStyle(index)
    {
        let tempStyle = "rounded-xl border z-3 2xl:p-6 lg:p-2";
        if(selectedGame != index)
        {
            tempStyle += " cursor-pointer";
            tempStyle += " border-gray-500/50"
        }
        else
            tempStyle += " " + GetBorderColor(index);
            

        return tempStyle;
    }
    function GetBorderColor(index)
    {
        switch(index)
        {
            case 0:
                return "border-cyan-400/50";
            case 1:
                return "border-orange-300/50";
            case 2:
                return "border-white/50";
            case 3:
                return "border-purple-400/50";
            case 4:
                return "border-cyan-700/70";
        }

        return "";
    }
    function GetBorderHover(index)
    {
        if(index == selectedGame) return "";
        switch(index)
        {
            case 0:
                return " hover:border-cyan-400/40";
            case 1:
                return " hover:border-orange-300/30";
            case 2:
                return " hover:border-white/30";
            case 3:
                return " hover:border-purple-400/30";
            case 4:
                return " hover:border-cyan-700/50";
        }
        return "";
    }
    function IsPageVisible(name){

        if(name == selectedGameDetails){
        
            return "absolute opacity-100 transition-opacity duration-200"
        } 
        else
        {
            return "absolute opacity-0 transition-opacity duration-200 pointer-events-none"
        }
    }

    return <section id="project" className="min-h-screen flex">
         
       
        <ScrollReveal>     
            <div className={`${IsPageVisible("")}`}> 
                <AllProjects
                GetBorderHover={GetBorderHover} 
                GetBorderStyle={GetBorderStyle} 
                selectedGame={selectedGame} 
                setSelectedGame={setSelectedGame} 
                setSelectedGameDetails={setSelectedGameDetails}/>
            </div>   
             <div className={`${IsPageVisible("Cassandra")}`}> 
                <Cassandra setSelectedGameDetails={setSelectedGameDetails} />
            </div> 
        </ScrollReveal>
    </section>
}