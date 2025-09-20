import { ScrollReveal } from "../ScrollReveal";

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
        
        <div className="absolute bg-cover h-[100%] min-w-screen bg-[url(/BlurBG.png)] z-0 bg-no-repeat -scale-x-100"></div>
        
        <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-custom-title">
                About Me
            </h2>

            <div className="rounded-xl p-8 transition-all text-lg">
            <p className="text-custom-text mb-3">
                I've been a game developer for around 5 yeas now and I love 
                <span className="font-bold text-custom-title"> Technical stuff</span> 
                . I enjoy developing every type of genre, 
                creating unique gameplay that is fun to play and just feels nice.
            </p>

            <p className="text-custom-text mb-6">
                I'm a  
                <span className="font-bold text-custom-title"> Generalist</span> 
                , but my focus remains in programming
                <span className="font-bold text-custom-title"> Mechanics </span>
                and 
                <span className="font-bold text-custom-title"> Tech-Art</span>
                !
            </p>

            <p className="text-custom-text mb-6">
                I really enjoy playing challenging games like Elden Ring, Darkest Dungeon and currently Silksong. Also, all Coop games and Friend Slop games are great! That's probably where all my inspiration comes from.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-4 -hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold pb-2 text-custom-text">
                        Tech I Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {
                            usedStuffList.map((tech, key)=>(
                                <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
                 <div className="rounded-xl p-4 -hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold pb-2 text-custom-text">
                        Stuff I've learned
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {
                            LearnedStuffList.map((skill, key)=>(
                                <span key={key} className="bg-custom-cyan-400 text-custom-title py-1 px-3 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))
                            }
                    </div>
                </div>
            </div>

            </div>
        </div>

    </ScrollReveal>
    </section>
}