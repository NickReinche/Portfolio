export const CassandraMovementImprovements = () => {
    return <div className="flex w-full h-full">
        <div className="w-3/5 pr-4">
            <p className="pb-4 text-custom-title font-bold"> Movement Improvements </p>

            <p className="pb-4"> Stuff I've added:</p>

            <p className="text-custom-title font-bold"> Coyote-Time </p>
            <p className="pb-8"> Pressing too late still allows you to jump / wall jump</p>

            <p className="text-custom-title font-bold"> Input Buffer </p>
            <p className="pb-8"> Pressing too early still allows you to jump / wall jump</p>

            <p className="text-custom-title font-bold"> Forced Movement </p>
            <p className="pb-8"> Override Player Input via script. Used to prevent repeated wall jumping on the same wall or for lvl transition.</p>

            <p className="text-custom-title font-bold"> Physical Grapple </p>
            <p className="pb-8"> Instead of cancelling the Grapple when the environment gets in the way, a new temporary grapple point is generated to go along the edge, 
                and destroyed if the line of sight to the last grapple point is clear.</p>
            
        </div>
        
        <div className="w-2/5">
             <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop>
                <source src="./Cassandra/Cassandra_Mechanics_Tech.mp4" type="video/mp4"/>
            </video>
         
        </div>
    </div>
}