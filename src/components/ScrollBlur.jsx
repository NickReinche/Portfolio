import { useEffect, useRef, useState } from "react"

export const ScrollBlur = ({children}) => {

    const upperY = -screen.height * 0.2;
    const lowerY = -screen.height * 0.2;
    const ref = useRef(null);
    const [blurAmount, setBlurAmount] = useState("backdrop-blur-xl");

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setBlurAmount("");
                ref.w;
            }
            else
                setBlurAmount("backdrop-blur-xl");

        }, 
        {threshold:0.2, rootMargin: lowerY + "px 0px " + upperY + "px 0px"}
        );

        if(ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    });

    return <div >
        <div ref={ref} className={blurAmount + " absolute w-[100%] h-[125%] -my-[6%] transition-all duration-500 allign-self-center justify-self-center z-1 pointer-events-none"}></div>
        {children}
        
    </div>
}