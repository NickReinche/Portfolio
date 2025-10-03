export const OWLGeneral = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> General </p>
            <p className="pb-8 text-custom-text">OWL is a Coop Rhythm Rogue-Like.</p> 

            <p className="pb-4 font-bold text-custom-title"> Focus </p>

            <p className="mb-2">Main focus: <span className="font-bold text-custom-title">Multiplayer</span>.</p>
        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./OWL.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}