export const ConvergenceVertex = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> Vertex Painting </p>
            <p className="pb-8 text-custom-text"> For fast "unique textures", I've created 2 shaders that react to Vertex Color.</p> 
            <p className="pb-4 font-bold text-custom-title"> Brick Wall </p>
            <p className="pb-8 text-custom-text"> The buildings in this game are just stacked cubes for the floors, 
                combining Parallax Occlusion and Vertex Painting, I'm able to blend between 3D brick and 2D plaster. </p> 
            
            <p className="pb-4 font-bold text-custom-title"> Floor </p>
            <p className="pb-8 text-custom-text"> The floor works somewhat the same, but it has the stones as a base and is able to fill it with water and mud via dynamic depth. </p> 

        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Convergence/Convergence_Vertex.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}