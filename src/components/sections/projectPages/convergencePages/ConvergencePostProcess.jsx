export const ConvergencePostProcess = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> PostProcess </p>
            <p className="pb-8 text-custom-text">The custom postprocess effect is completely made in HLSL. 
                It's a Kuwahara filter with an outline effect to make everything a bit painterly. </p> 

            <p className="pb-4 font-bold text-custom-title"> Le Problem </p>
            <p>The problem is: it's way too expensive. The shader needs to be more efficient and the environment should've been low-res to reduce the performance impact.
                I underestimated how many details the postprocess eats. I could've reduced way more stuff without any visual difference. 
            </p>
        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Convergence/Convergence_PostProcess.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}