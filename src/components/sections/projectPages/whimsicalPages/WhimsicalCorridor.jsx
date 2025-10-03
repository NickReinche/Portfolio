export const WhimsicalCorridor = () => {
    return <div className="flex w-full h-full">
        <div className="w-2/3 pr-8">
            <p className="pb-4 font-bold text-custom-title"> Corridors </p>
            <p className="pb-8 text-custom-text"> I've created a corridor that deforms and repeats along a spline. With a Bezier Curve I'm able to set the start, end and transition points to connect any room.</p> 
            <p className="pb-8 text-custom-text"> All the collision checks to validate that the corridor is not intersecting another room or other corridors
                 are just cubes that check along the spline.</p> 
            <p className="pb-2 text-custom-text"> The conditions to connect a Room with a Corridor are: angle between doors, steepness and distance. 
                The margins for the conditions are adjustable, so you can try with different values if something has to be connected.</p>
            <p className="pb-8 text-custom-text"> While this doesn't guarantee that all rooms are connected, it has a very high chance of ~75% of the rooms beeing connected. That's also the condition for a successful generation.</p>


        </div>
        
        <div className="w-1/3">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Whimsical/Whimsical_Corridor.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}