export const OWLLVL = () => {
    return <div className="flex w-2/3 h-full">
        <div className="w-full pr-8">
            <p className="pb-4 font-bold text-custom-title"> Levels </p>
            <p className="pb-8 text-custom-text">Every level has the same base and every level just adds upon that.
                Some targeted elements of levels are randomly added or removed, so it won't feel that repetitive. 
                All the trees and grass are placed in the base, with a masked shader.
                The trees are masked in or out, depending on the SDF of placed objects and the grass is masked with a virtual texture that detects invisible mesh for the paths or just blank spots.</p> 
        </div>
        
    </div>
}