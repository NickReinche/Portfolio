import { useEffect, useState } from "react"

export const Projects = () => {

    const [selectedGame, setSelectedGame] = useState(0);


    return <section id="project" className="min-h-screen flex py-20">
        
        <video className={`absolute h-full w-full  ml-50 ${selectedGame == 0? "opacity-100":"opacity-0"} transition-all duration-200`} muted autoPlay loop>
            <source src="./Whimsical.mp4" type="video/mp4"/>
        </video>
        <video className={`absolute h-full w-full  ml-50 ${selectedGame == 1? "opacity-100":"opacity-0"} transition-all duration-200`} muted autoPlay loop>
            <source src="./Cassandra.mp4" type="video/mp4"/>
        </video>
        <video className={`absolute h-full w-full  ml-50 ${selectedGame == 2? "opacity-100":"opacity-0"} transition-all duration-200`} muted autoPlay loop>
            <source src="./Fail_Safe.mp4" type="video/mp4"/>
        </video>
         <video className={`absolute h-full w-full  ml-50 ${selectedGame == 3? "opacity-100":"opacity-0"} transition-all duration-200`} muted autoPlay loop>
            <source src="./OWL.mp4" type="video/mp4"/>
        </video>
         <video className={`absolute h-full w-full  ml-50 ${selectedGame == 4? "opacity-100":"opacity-0"} transition-all duration-200`} muted autoPlay loop>
            <source src="./Convergence.mp4" type="video/mp4"/>
        </video>
        
        <div className="absolute min-h-screen min-w-screen bg-linear-to-tl from-[rgba(0,0,0,0.7)] from-25% to-[0,0,0,0] to-35%"></div>
        <div className="absolute min-h-screen min-w-screen bg-linear-to-r from-[rgba(0,0,0,1)] from-25% to-[0,0,0,0] to-30%"></div>

        <div className="absolute  self-end right-10 justify-self-center">
            <img src={`
                ${
                    selectedGame == 0? './WhimsicalLogo.png':
                    selectedGame == 1? './CassandraLogo.png':
                    selectedGame == 2? './FailSafeLogo.png':
                    selectedGame == 3? './OWLLogo.png':
                    selectedGame == 4? './ConvergenceLogo.png': ''
                }
                `}
                className="max-w-120 max-h-50"></img>
        </div>

        <div className="z-10 p-20 py-30">
            <div className="text-4xl font-bold mb-16 text-start">
                Games i've made
            </div>


            <div className="grid drid-cols-1 gap-6">

                <div className="p-6 rounded-xl border border-cyan-400/50 cursor-pointer z-1" onClick={() => setSelectedGame(0)}>
                    <div className="flex justify-between">
                        <h3 className="text-md font-bold">
                            Whimsical Artefacts
                        </h3>
                        <img src="./Unity.svg" className="w-7 h-7"></img>
                    </div>
                    
                    <div className={`${selectedGame == 0? "opacity-100 h-20": "opacity-0 h-0"} transition-all duration-200`}>
                        <p className="text-sm text-gray-400 mb-4 w-65">
                            Multiplayer friend-slop game with proximity vc and drawing system
                        </p>
                        {
                            ["Netcode", "Steamworks"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>

                </div>

               <div className="p-6 rounded-xl border border-orange-300/50 cursor-pointer z-2" onClick={() => setSelectedGame(1)}>
                    <div className="flex justify-between">
                        <h3 className="text-md font-bold">
                            Cassandra Flame of Faith
                        </h3>
                        <img src="./Unity.svg" className="w-7 h-7"></img>
                    </div>
                    <div className={`${selectedGame == 1? "opacity-100 h-20": "opacity-0 h-0"} transition-all duration-200`}>
                        <p className="text-sm text-gray-400 mb-4 w-65">
                            Multiplayer friend-slop game with proximity vc and drawing system
                        </p>
                        {
                            ["Netcode", "Steamworks"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>

                </div>

                <div className="p-6 rounded-xl border border-white/50 cursor-pointer z-3" onClick={() => setSelectedGame(2)}>
                    <div className="flex justify-between">
                        <h3 className="text-md font-bold">
                            Fail-Safe
                        </h3>
                        <img src="./Unreal.svg" className="w-7 h-7"></img>
                    </div>
                    
                    <div className={`${selectedGame == 2? "opacity-100 h-20": "opacity-0 h-0"} transition-all duration-200`}>
                        <p className="text-sm text-gray-400 mb-4 w-65">
                            Multiplayer friend-slop game with proximity vc and drawing system
                        </p>
                        {
                            ["Netcode", "Steamworks"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>

                </div>
                
                <div className="p-6 rounded-xl border border-purple-400/50 cursor-pointer z-4" onClick={() => setSelectedGame(3)}>
                    <div className="flex justify-between">
                        <h3 className="text-md font-bold">
                            O.W.L.
                        </h3>
                        <img src="./Unreal.svg" className="w-7 h-7"></img>
                    </div>
                    
                    <div className={`${selectedGame == 3? "opacity-100 h-20": "opacity-0 h-0"} transition-all duration-200`}>
                        <p className="text-sm text-gray-400 mb-4 w-65">
                            Multiplayer friend-slop game with proximity vc and drawing system
                        </p>
                        {
                            ["Netcode", "Steamworks"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>

                </div>
                <div className="p-6 rounded-xl border border-cyan-700/70 cursor-pointer" onClick={() => setSelectedGame(4)}>
                    <div className="flex justify-between">
                        <h3 className="text-md font-bold">
                            Convergence
                        </h3>
                        <img src="./Unreal.svg" className="w-7 h-7"></img>
                    </div>
                    
                    <div className={`${selectedGame == 4? "opacity-100 h-20": "opacity-0 h-0"} transition-all duration-200`}>
                        <p className="text-sm text-gray-400 mb-4 w-65">
                            Multiplayer friend-slop game with proximity vc and drawing system
                        </p>
                        {
                            ["Netcode", "Steamworks"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    </section>
}