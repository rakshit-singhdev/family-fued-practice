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
