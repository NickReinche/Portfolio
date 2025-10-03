export const WhimsicalDrawingSystem = () => {
    return <div className="flex w-full h-full">
        <div className="w-2/3 pr-8">
            <p className="pb-4 font-bold text-custom-title"> Drawing System </p>
            <p className="pb-4 text-custom-text">The Drawing System is split between visual stuff and logic stuff.
            If something needs a drawing, it can just request them from the DrawingManager Singleton. 
            You can give a list of textures and it returns the modified texture with the index. </p> 
            <p className="pb-4 text-custom-text">With that, I'm able to easily create custom logic and add drawings to anything I want.</p>
            <p className="pb-8 text-custom-text">The Drawing System itself is quite simple, it's a render texture thas draws a point at the mouse position. To create lines i just take the center of 2 points and connect it with a line.
                Everything is run on the GPU, so it's quite efficient.
            </p>
        </div>
        
        <div className="w-1/3">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Whimsical/Whimsical_Drawing.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}