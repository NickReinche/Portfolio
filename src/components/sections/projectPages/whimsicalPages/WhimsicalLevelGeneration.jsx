export const WhimsicalLevelGeneration = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> Level Generation </p>
            <p className="pb-8 text-custom-text">The level Generation is split into a few different stages;</p>
                <li className="text-custom-text">Spawn rooms at random positions</li> 
                <li className="text-custom-text">Iterate through all rooms and nudge them all together</li> 
                <li className="text-custom-text">Try to connect all doors to their nearest 3 unused doors</li> 
                <li className="text-custom-text">Find all Islands (unreachable rooms) and try to connect them</li> 
                <li className="text-custom-text">Delete not connected rooms / Islands</li>
                <li className="text-custom-text">Check if enough rooms are remaining, if not, reset all and generate new</li>
                <li className="text-custom-text">Spawn traps, artefacts</li>
        </div>
    </div>
}