import { useState } from 'react';
import './App.css'
import "./index.css"

import { NavBar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { LoadingScreen } from './components/LoadingScreenName';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

      <div className={`min-h-screen transition-all duration-700  ${
        isLoaded? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}>
          
          <video className="absolute h-full w-full  ml-50" muted autoPlay loop>
            <source src='/Showreel_New.mp4' type="video/mp4"/>
            Video not supported
          </video>
          <div className="absolute h-full w-full bg-gradient-to-r from-[rgba(0,0,0,1)] from-25% via-[rgba(0,0,0,0.8)] via-35% to-[rgba(54,10,54,0)] to-60%"></div>

          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

          <Home/>
          <About/>
          <Projects/>
      </div>
    </>
  )
}

export default App
