export const FailSafeColorGrading = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> Color Grading </p>
            <p className="text-custom-text">Fail-Safe is the first game where I really started to use color grading. The way you can just completely change the mood or make a bland scene to something cinematic is really fascinating.</p> 

            <p className="mb-2 text-custom-text"> Since then, color grading has become a crucial step at the end of every project.</p>
            
        </div>
        
      <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./FailSafe/FailSafe_ColorGrading.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}