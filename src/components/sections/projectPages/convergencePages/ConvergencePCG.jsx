export const ConvergencePCG = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> PCG </p>
            <p className="pb-8 text-custom-text">I used Unreal's Procedual Content Generation to quickly create debris, generate boarded windows/doors and create roadblocks. </p> 

        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Convergence/Convergence_PCG.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}