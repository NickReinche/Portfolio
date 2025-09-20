import { ScrollReveal } from "../ScrollReveal";

export const Contact = () => {
    return <section id="contact" className=" min-h-screen flex items-center justify-center py-20">

        <div className="absolute bg-cover h-[100%] min-w-screen bg-[url(/BlurBG.png)] z-0 bg-no-repeat"></div>

        <ScrollReveal>
        <h2 className="xl:text-4xl lg:text-2xl font-bold mb-8 text-center text-custom-title">Get In Touch!</h2>
        <div className="flex justify-between mx-2">
            <a href="mailto:nick.reinche@gmail.com">
                    <div className="border border-custom-cyan-200 text-custom-cyan-100 py-3 px-6 rounded font-medium transition-all duration-200 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                        Mail
                </div>
            </a>
            <a href="https://www.linkedin.com/in/nick-reinche-990b24341" target="_blank">
                <div className="border border-custom-cyan-200 text-custom-cyan-100 py-3 px-6  rounded font-medium transition-all duration-200 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                        LinkedIn
                </div>
            </a>
        </div>
        </ScrollReveal>
    </section>
}