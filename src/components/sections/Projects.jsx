import { useEffect, useState } from "react"
import { ScrollReveal } from "../ScrollReveal";
import { AllProjects } from "./projectPages/AllProjects";
import { Cassandra } from "./projectPages/cassandraPagest/Cassandra";
import { Whimsical } from "./projectPages/whimsicalPages/Whimsical";
import { FailSafe } from "./projectPages/failSafePages/FailSafe";
import { OWL } from "./projectPages/owlPages/owl";
import { Convergence } from "./projectPages/convergencePages/Convergence";

export const Projects = () => {


    const [selectedGame, setSelectedGame] = useState(1);
    
    const [selectedGameDetails, setSelectedGameDetails] = useState("");
    
    const [selectedArea, setSelectedArea] = useState(0);

    useEffect(() => {
        setSelectedArea(0);
        return;
    }, [selectedGameDetails])

    function GetBorderStyle(index)
    {
        let tempStyle = "rounded-xl border z-3 2xl:p-6 lg:p-2 transition-all duration-100";
        if(selectedGame != index)
        {
            tempStyle += " cursor-pointer";
            tempStyle += " border-custom-cyan-100/20";
        }
        else
            tempStyle += " " + GetBorderColor(index) + " translate-x-2";
        return tempStyle;
    }
    function GetBorderStyleGameDetails(style, index, selectedIndex)
    {
        let tempStyle = "rounded-xl border z-3 2xl:p-3 lg:p-3 transition-all duration-100";
        if(selectedIndex != index)
        {
            tempStyle += " cursor-pointer";
            tempStyle += " border-custom-cyan-100/20";
        }
        else
            tempStyle += " " + GetBorderColor(style) + " pointer-events-none translate-x-5";

        return tempStyle;
    }
    function GetBorderColor(index)
    {
        switch(index)
        {
            case 0:
                return "border-custom-whimsical/50";
            case 1:
                return "border-custom-cassandra/50";
            case 2:
                return "border-custom-fail/50";
            case 3:
                return "border-custom-owl/50";
            case 4:
                return "border-custom-convergence/70";
        }

        return "";
    }
    function GetBorderHover(index)
    {
        if(index == selectedGame) return "";
        return GetBorderHoverIgnoreSelected(index);
    }
    function GetBorderHoverIgnoreSelected(index){
        switch(index)
        {
            case 0:
                return " hover:border-custom-whimsical/40 hover:translate-x-2";
            case 1:
                return " hover:border-custom-cassandra/30 hover:translate-x-2";
            case 2:
                return " hover:border-custom-fail/30 hover:translate-x-2";
            case 3:
                return " hover:border-custom-owl/30 hover:translate-x-2";
            case 4:
                return " hover:border-custom-convergence/50 hover:translate-x-2";
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


    function GetProjectCategories(categories, gameIndex, gameLink){
        return <div className="m-10 ml-20 mt-18 w-200 z-10 flex flex-col">
             <div className="mb-10 min-h-40">
                <img src={`
                    ${
                        selectedGame == 0? './WhimsicalLogo.png':
                        selectedGame == 1? './CassandraLogo.png':
                        selectedGame == 2? './FailSafeLogo.png':
                        selectedGame == 3? './OWLLogo.png':
                        selectedGame == 4? './ConvergenceLogo.png': ''
                    }
                    `}
                    className="max-h-40"></img>
            </div>
            <div className="flex flex-col grow">
                <div className="grid grid-cols-1 w-60 gap-4">

                {categories.map((name, index) => (
                    <div key={index} className={`${GetBorderStyleGameDetails(gameIndex, index, selectedArea)} ${GetBorderHoverIgnoreSelected(gameIndex)}`} onClick={() => setSelectedArea(index)}>
                        {name}
                    </div>
                )
                )}
                </div>
                
                <div className="grow"></div>

                <a className="cursor-pointer p-4 pb-0 text-custom-link hover:text-custom-link-hover" href={gameLink} target="_blank">
                    <h3 className="text-md font-bold">
                        Open Game Page
                    </h3>
                </a>

                <button className="p-4 self-start cursor-pointer text-custom-link hover:text-custom-link-hover" onClick={() => {setSelectedGameDetails("")}}> 
                    Back
                </button>
            </div>
        </div>
}
    function GetPage(pages){
       return pages[selectedArea];
    }

    function GetBackground(backgrounds)
    {
        return backgrounds[selectedArea];
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
             <div className={`${IsPageVisible("Whimsical")}`}> 
                <Whimsical 
                GetProjectCategories={GetProjectCategories}
                GetPage={GetPage}
                GetBackground={GetBackground}/>
            </div> 
            <div className={`${IsPageVisible("Cassandra")}`}> 
                <Cassandra 
                GetProjectCategories={GetProjectCategories}
                GetPage={GetPage}
                GetBackground={GetBackground}/>
            </div> 
            <div className={`${IsPageVisible("FailSafe")}`}> 
                <FailSafe 
                GetProjectCategories={GetProjectCategories}
                GetPage={GetPage}
                GetBackground={GetBackground}/>
            </div> 
            <div className={`${IsPageVisible("OWL")}`}> 
                <OWL 
                GetProjectCategories={GetProjectCategories}
                GetPage={GetPage}
                GetBackground={GetBackground}/>
            </div> 
            <div className={`${IsPageVisible("Convergence")}`}> 
                <Convergence 
                GetProjectCategories={GetProjectCategories}
                GetPage={GetPage}
                GetBackground={GetBackground}/>
            </div> 
        </ScrollReveal>
    </section>
}

