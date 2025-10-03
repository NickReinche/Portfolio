export const FailSafeProcedualMesh = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> Procedural Mesh </p>
            <p className="pb-8 text-custom-text">The lying moss was created with a procedural mesh base, the system creates a small layer atop of objects,
                 and with Unreal's PCG, the moss cards are randomly placed.</p> 
        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./FailSafe/FailSafe_Procedual.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}