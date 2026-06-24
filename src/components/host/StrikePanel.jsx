import { useEffect, useRef } from "react";

export const Strike = ({ active }) => {

    const prevActive = useRef(active);

    useEffect(() => {
        if (active && !prevActive.current) {
            const sound = new Audio("/sounds/buzzer-or-wrong-answer.mp3");
            sound.currentTime = 0.35;
            sound.play();
        }

        prevActive.current = active;
    }, [active]);

    return (
        <div className=" md:w-12 md:h-12 w-14 h-14 overflow-hidden perspective-midrange">
            <div className={`
            relative w-full h-full
            transform-3d
            ${active ?
                    "animate-[strikeAppear_0.4s_ease-out]"
                    :
                    ""
                }
            `}>
                <div className=
                    {`flex items-center justify-center absolute inset-0 
                    md:text-3xl text-2xl
                    border-2 font-extrabold
                    ${active ? "border-red-300 text-white bg-red-600" : " border-slate-700 text-slate-700"}
                    rounded-full`}>
                    {'\u2717'}
                </div>
            </div>
        </div>
    )
}

const StrikePanel = ({ strikes = 2 }) => {

    return (
        <div className="block border-2 border-slate-700 w-max p-4 rounded-2xl bg-slate-800">
            <span className="
            uppercase text-center block 
            ">Strikes</span>
            <div className="flex gap-2">
                {[...Array(3)].map((_, index) => (
                    <Strike
                        key={index}
                        active={index < strikes}
                    />
                ))}
            </div>
        </div>
    )
}

export default StrikePanel