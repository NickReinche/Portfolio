export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative max-w-xl ">
        <div className="text.center z-10 px-4 " >
            <h1 className="text-5xl md:text-7xl font-bold bg.white pb-8 flex">
                Hey!
            </h1>

            <p className="text-white-400 text-sm md:text-xl mb-16 max-w-lg mx-auto px-5">
                I'm Nick. I make games!
            </p>
     
            <div className="flex space-x-4 px-5">
                <a href="#project"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                    View Projects
                </a>

                <a href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}