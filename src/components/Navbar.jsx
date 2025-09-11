import { useEffect, useState } from "react"

export const NavBar = ({menuOpen, setMenuOpen}) => {
    let [curScroll, setCurScroll] = useState(0);
    useEffect(()=> {
        
    const curScrollUpdater = () => {

        setCurScroll(window.scrollY);
    }
        window.addEventListener("scroll", curScrollUpdater);
        return() => window.removeEventListener("scroll", curScrollUpdater);
    }, [])
    
    


    useEffect(() => {
        document.body.style.overflowY = menuOpen ? "hidden": "";
        document.body.style.overflowX =  "hidden";
    }, [menuOpen])

    
    return <nav className={`fixed top-0 w-full z-40 bg-[rgba(0,0,0,0.9)] blackdrop-blur-lg shadow-lg transition-transform
    ${curScroll < 150? "-translate-y-16" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-l font-bold text-white text-xl"> 
                    Nick Reinche
                </a>
                
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transtition-colors duration-100">
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transtition-colors duration-100">
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transtition-colors duration-100">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transtition-colors duration-100">
                        Contact
                    </a>
                </div>

            </div>

        </div>
    </nav>
}