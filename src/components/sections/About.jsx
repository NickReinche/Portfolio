export const About = () => {

    const usedStuffList = [
        "Unity",
        "Unreal Engine",
        "Blender",
        "Substance Designer / Painter",
        "Reaper",
        "FMOD",
        "Inky",

    ];
    const LearnedStuffList = [
        "C#",
        "C++",
        "Shader",
        "HLSL / Shadergraph",
        "Custom Postprocess",
        "Particle Systems",
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-3">
                I've been a game developer for around 5 yeas now and I love 
                <span className="font-bold text-purple-400"> Technical stuff</span> 
                . I enjoy developing every type of genre, 
                creating unique gameplay and polishing as much as I can.
            </p>

            <p className="text-gray-300 mb-6">
                I'm a  
                <span className="font-bold text-purple-400"> Generalist</span> 
                , but my focus remains in programming
                <span className="font-bold text-purple-400"> Mechanics </span>
                and 
                <span className="font-bold text-purple-400"> Tech-Art</span>
                !
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-4 -hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold pb-2">
                        Tech I Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {
                            usedStuffList.map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
                 <div className="rounded-xl p-4 -hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold  pb-2">
                        Skills I've learned
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {
                            LearnedStuffList.map((skill, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))
                            }
                    </div>
                </div>
            </div>

            </div>
        </div>


    </section>
}