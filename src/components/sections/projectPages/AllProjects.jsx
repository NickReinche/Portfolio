import { ScrollBlur } from "../../ScrollBlur";


export function AllProjects ({GetBorderStyle, GetBorderHover, selectedGame, setSelectedGame, setSelectedGameDetails}) {

    const projectHiddenStyle = "opacity-0 h-0 scale-y-0";
    const projectShownStyle = "opacity-100 h-25 scale-y-100";
    return(
        <div className="h-screen min-w-screen">
            <video className={`absolute object-cover max-h-screen h-screen min-w-screen ${selectedGame == 0? "opacity-100":"opacity-0"} transition-all duration-200`} muted autoPlay loop>
                <source src="./Whimsical.mp4" type="video/mp4"/>
            </video>
            <video className={`absolute object-cover max-h-screen h-screen min-w-screen ${selectedGame == 1? "opacity-100":"opacity-0"} transition-opacity duration-200`} muted autoPlay loop>
                <source src="./Cassandra.mp4" type="video/mp4"/>
            </video>
            <video className={`absolute object-cover max-h-screen h-screen min-w-screen ${selectedGame == 2? "opacity-100":"opacity-0"} transition-opacity duration-200`} muted autoPlay loop>
                <source src="./Fail_Safe.mp4" type="video/mp4"/>
            </video>
            <video className={`absolute object-cover max-h-screen h-screen min-w-screen ${selectedGame == 3? "opacity-100":"opacity-0"} transition-opacity duration-200`} muted autoPlay loop>
                <source src="./OWL.mp4" type="video/mp4"/>
            </video>
            <video className={`absolute object-cover max-h-screen h-screen min-w-screen ${selectedGame == 4? "opacity-100":"opacity-0"} transition-opacity duration-200`} muted autoPlay loop>
                <source src="./Convergence.mp4" type="video/mp4"/>
            </video>
            
            <div className="absolute min-h-screen min-w-screen bg-linear-to-tl from-custom-black/70 from-25% to-[0,0,0,0] to-35%"></div>
            <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-custom-black from-25% to-[0,0,0,0] to-30%"></div>
    
            <ScrollBlur className="absolute z-0">
                <div className={`absolute h-full w-full`}></div>
            </ScrollBlur>

            <div className="absolute right-10 bottom-10 z-10 pb-10">
                <img src={`
                    ${
                        selectedGame == 0? './WhimsicalLogo.png':
                        selectedGame == 1? './CassandraLogo.png':
                        selectedGame == 2? './FailSafeLogo.png':
                        selectedGame == 3? './OWLLogo.png':
                        selectedGame == 4? './ConvergenceLogo.png': ''
                    }
                    `}
                    className="xl:max-w-120 md:max-w-80 sm:max-w-40 max-h-50"></img>
            </div>
            
            <div className="absolute pt-20 pl-20 xl:pt-30 lg:pt-14 z-10 h-screen min-w-screen">
                <div className="xl:text-4xl lg:text-2xl font-bold mb-12 text-start text-custom-title font-bold">
                    Games i've made
                </div>


                <div className="grid grid-cols-1 xl:gap-4 md:gap-2 w-80 py-5 ">

                    <div className={`${GetBorderStyle(0)} ${GetBorderHover(0)} `} onClick={() => setSelectedGame(0)}>
                        <div className="flex justify-between">
                            <h3 className="text-md font-bold text-custom-text">
                                Whimsical Artefacts
                            </h3>
                            <img src="./Unity.svg" className="w-7 h-7 opacity-75"></img>
                        </div>
                        
                        <div className={`${selectedGame == 0? projectShownStyle: projectHiddenStyle} transition-all duration-200`}>
                            <p className="text-sm text-custom-text/80 mb-4 w-60">
                                Multiplayer friend-slop game with voice-chat and drawing system
                            </p>
                            {
                                ["Netcode", "Steamworks"].map((tech, key)=>(
                                    <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))
                            }
                        
                        <p className="text-sm text-custom-link hover:text-custom-link-hover text-right font-bold">
                            <button  onClick={() => setSelectedGameDetails("Whimsical")}> 
                                View Details 
                            </button>
                        </p>
                        </div>
                        
                    </div>

                <div className={`${GetBorderStyle(1)} ${GetBorderHover(1)}`} onClick={() => setSelectedGame(1)}>
                        <div className="flex justify-between">
                            <h3 className="text-md font-bold text-custom-text">
                                Cassandra Flame of Faith
                            </h3>
                            <img src="./Unity.svg" className="w-7 h-7 opacity-75"></img>
                        </div>
                        <div className={`${selectedGame == 1? projectShownStyle: projectHiddenStyle} transition-all duration-200`}>
                            <p className="text-sm text-custom-text/80 mb-4 w-60 text-md">
                                2D Plattformer with focus on movement and interactive stuff
                            </p>
                            {
                                ["Game-Feel", "Shader"].map((tech, key)=>(
                                    <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))
                            }
                        <p className="text-sm text-custom-link hover:text-custom-link-hover text-right font-bold">
                            <button onClick={() => setSelectedGameDetails("Cassandra")} target="_blank"> 
                                View Details 
                            </button>
                        </p>
                        </div>

                    </div>

                    <div className={`${GetBorderStyle(2)} ${GetBorderHover(2)}`} onClick={() => setSelectedGame(2)}>
                        <div className="flex justify-between">
                            <h3 className="text-md font-bold text-custom-text">
                                Fail-Safe
                            </h3>
                            <img src="./Unreal.svg" className="w-7 h-7 opacity-75"></img>
                        </div>
                        
                        <div className={`${selectedGame == 2? projectShownStyle: projectHiddenStyle} transition-all duration-200`}>
                            <p className="text-sm text-custom-text/80 mb-4 w-50">
                                Puzzle Exploring game with a focus on Environment and C++
                            </p>
                            {
                                ["C++", "Color Grading"].map((tech, key)=>(
                                    <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))
                            }
                            <p className="text-sm text-custom-link hover:text-custom-link-hover text-right font-bold">
                            <a href="https://apfei.itch.io/fail-safe" target="_blank"> 
                                View Details 
                            </a>
                            </p>
                        </div>

                    </div>
                    
                    <div className={`${GetBorderStyle(3)} ${GetBorderHover(3)}`} onClick={() => setSelectedGame(3)}>
                        <div className="flex justify-between">
                            <h3 className="text-md font-bold text-custom-text">
                                O.W.L.
                            </h3>
                            <img src="./Unreal.svg" className="w-7 h-7 opacity-75"></img>
                        </div>
                        
                        <div className={`${selectedGame == 3? projectShownStyle: projectHiddenStyle} transition-all duration-200`}>
                            <p className="text-sm text-custom-text/80 mb-4 w-50">
                                Duo Project: Coop rhythm game with dynamic music
                            </p>
                            {
                                ["Netcode", "Meta Sound"].map((tech, key)=>(
                                    <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))
                            }
                            <p className="text-sm text-custom-link hover:text-custom-link-hover text-right font-bold">
                                <a href="https://apfei.itch.io/owl-one-wave-length" target="_blank"> 
                                    View Details 
                                </a>
                            </p>

                        </div>

                    </div>
                    <div className={`${GetBorderStyle(4)} ${GetBorderHover(4)}`} onClick={() => setSelectedGame(4)}>
                        <div className="flex justify-between">
                            <h3 className="text-md font-bold text-custom-text">
                                Convergence
                            </h3>
                            <img src="./Unreal.svg" className="w-7 h-7 opacity-75"></img>
                        </div>
                        
                        <div className={`${selectedGame == 4? projectShownStyle: projectHiddenStyle} transition-all duration-200`}>
                            <p className="text-sm text-custom-text/80 mb-4 w-55">
                                3D "Plattformer" with a heavy focus on HLSL and postprocess
                            </p>
                            {
                                ["HLSL", "Postprocess"].map((tech, key)=>(
                                    <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))
                            }
                            <p className="text-sm text-custom-link hover:text-custom-link-hover text-right font-bold"> 
                            <a href="https://apfei.itch.io/convergence" target="_blank"> 
                                View Details 
                            </a>
                            </p>
                        </div>
                            
                    </div>
                    
                    <div className="flex justify-between">

                    <a className="cursor-pointer z-4 pt-6 text-custom-link hover:text-custom-link-hover" href="https://apfei.itch.io" target="_blank">
                            <h3 className="text-md font-bold mx-7">
                                View All
                            </h3>
                    </a>
                    </div>
                </div>
            </div>
        </div>
)
}