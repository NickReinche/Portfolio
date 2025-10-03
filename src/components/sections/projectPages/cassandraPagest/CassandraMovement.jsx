export const CassandraMovement = () => {
    return <div className="flex w-full h-full">
        <div className="w-2/5 pr-4">
            <p className="pb-4 font-bold text-custom-title"> Movement </p>

            <p> Special Movement types;</p>
            <p className="pb-2"> Dash, Wall-Jump, Grappling</p>
            <p className="pb-12"> The Wall-Jump and the Grappling Hook are unlocked later in the game to slowly introduce the player to the movement.</p>
            
        </div>
        
        <div className="w-3/5">
             <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop>
                <source src="./Cassandra/Cassandra_Mechanics.mp4" type="video/mp4"/>
            </video>
         
        </div>
    </div>
}