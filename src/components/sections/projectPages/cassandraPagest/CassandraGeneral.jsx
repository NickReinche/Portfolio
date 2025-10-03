export const CassandraGeneral = () => {
    return <div className="flex w-full h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> General </p>
            <p className="pb-8 text-custom-text">Cassandra Flame of Faith is a 2D Platformer, "Metroidvania" made in Unity.</p> 

            <p className="pb-4 font-bold text-custom-title"> Focus </p>

            <p className="mb-2">Main focus: <span className="font-bold text-custom-title">Smooth gameplay</span> that flows.</p>
            <p>Secondary focus: <span className="font-bold text-custom-title">Reactive stuff</span>.</p>
            <p>This doesn't directly influence the gameplay, but still pushes the game-feel quite a bit.</p>
        </div>
        
        <div className="w-full">
            <video className={`object-cover transition-all duration-200 border border-white border-2`} controls loop muted>
                <source src="./Cassandra/Cassandra_Intro.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}