export const OWLMultiplayer = () => {
    return <div className="flex w-full h-full">
        <div className="w-2/3 pr-8">
            <p className="pb-4 font-bold text-custom-title"> Multiplayer </p>
            <p className="pb-8 text-custom-text">The biggest thing in my mind was; I do not want to pay monthly for the multiplayer service, 
                so I've used a peer-to-peer connection over Steam to not pay any server. </p>
            <p className="pb-8 text-custom-text"> To dodge all the latency, the player is completely controlled locally with full authority. 
                As the game is not competitive or has any long-term progression, I decided to not do any server checks to speed up development.
                The game syncs initially with the RTT. The enemies are synced 1 beat before their action, so everything is perfectly synced.
            </p>

        </div>
    </div>
}