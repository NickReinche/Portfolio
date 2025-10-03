export const WhimsicalGeneral = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> General </p>
            <p className="pb-8 text-custom-text">Whimsical Artefacts is an 3D Friend-Slop game.</p> 

            <p className="pb-4 font-bold text-custom-title"> Focus </p>

            <p className="mb-2">Main focus: <span className="font-bold text-custom-title">Multiplayer</span>.</p>
            <p>Secondary focus: 
                <span className="font-bold text-custom-title"> Cool Stuff</span>. The game was created so any chaotic idea I have can be added without feeling out of place.</p>
        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Whimsical/Whimsical_General.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}