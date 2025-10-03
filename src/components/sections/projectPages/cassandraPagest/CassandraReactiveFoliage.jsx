export const CassandraReactiveFoliage = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-4">
            <p className="pb-4 pr-4 text-custom-title font-bold"> Reactive Foliage </p>

            <p className="pb-8"> To achieve reactive foliage, I've combined the Unity Particle System and Render Textures.</p>
            <p className="pb-4"> The Particles indicate the position and velocity of the player via Color and Opacity.</p>
            <p className="pb-8"> With a "Particle Camera" attached to the main camera, I'm able to render a custom screenspace velocity texture for my foliage shader.</p>
            
            <p className="text-custom-title font-bold pb-4"> Conclusion</p>
            <p> Sadly, the main shader only affects the vertices and displaces them, if I had to improve the shader, I would include, or change it to a pixel shader, 
                manipulating the UV based on velocity, making it more flowy.</p>
            
        </div>
        
        <div className="w-full">
             <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop>
                <source src="./Cassandra/Cassandra_Foliage.mp4" type="video/mp4"/>
            </video>
         
        </div>
    </div>
}