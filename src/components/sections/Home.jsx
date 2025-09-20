export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-start ml-20 ">
        <div className="text.center z-10 " >
            <h1 className="text-5xl md:text-7xl font-bold text-custom-title pb-8 flex -ml-1">
                Hey!
            </h1>

            <p className="text-custom-text text-sm md:text-xl mb-12 max-w-lg mx-auto">
                I'm Nick. I make games :)
            </p>
     
            <div className="flex space-x-4">
                <a href="#project"
                className={`bg-custom-cyan-300 text-custom-text py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}`}>
                    View Projects
                </a>

                <a href="#contact"
                className="border border-custom-cyan-200 text-custom-text  py-3 px-6 rounded font-medium transition-all duration-200 
                relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}