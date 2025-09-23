import { useEffect, useState } from "react";

export const LoadingScreen = ( {onComplete} ) => {
    const[firstText, setFirstText] = useState("");
    const[secondText, setSecondText] = useState("");
    const[thirdText, setThirdText] = useState("");

    const[fade, setFade] = useState(false);

    const secondBuffer = 20;
    const thirdBuffer = 30;

    const fullFirstText = "Hey!";
    const fullSecondText = "I'm Nick.";
    const fullThirdText = "I make games :)";
      

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        let initialDelay = true;
        setTimeout(() => {
                    initialDelay = false;
                }, 500);
                
        let index = 0;
        const interval = setInterval(() => {
            if(initialDelay) return;

            setFirstText(fullFirstText.substring(0, index));
            setSecondText(fullSecondText.substring(0, index - fullFirstText.length - secondBuffer));
            setThirdText(fullThirdText.substring(0, index - fullFirstText.length - secondBuffer - fullSecondText.length - thirdBuffer));
            index++
            
            if(index > fullFirstText.length + fullSecondText.length + secondBuffer + fullThirdText.length + thirdBuffer){
                clearInterval(interval);

                setTimeout(() => {
                    setFade(true);
                }, 500);
                setTimeout(() => {
                    document.body.style.overflowY = "";
                    onComplete();
                }, 850);
            }
        }, 25);

        return () => clearInterval(interval);
    }, [])
    
    return (
        <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-all duration-350
        ${fade? "opacity-0 mr-50" : "opacity-100 "}`}>
            <div className="text.center z-10 px-4 " >
        <h1 className="text-5xl md:text-7xl font-bold pb-8 flex w-70 h-25 text-custom-title">
            {firstText}
        </h1>

        <p className="text-custom-text text-sm md:text-xl mb-16 max-w-lg mx-auto w-70 h-25">
            {secondText} {thirdText}
        </p>
        </div>
    </div>
    );
};
