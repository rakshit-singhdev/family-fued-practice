
const Banner = ({ teamName = "Sample Name" }) => {
    return (
        <div className="h-1/7 mt-4 overflow-hidden perspective-midrange">
            <div className={`
            relative w-full h-full
            transform-3d
            ${teamName ?
                    "animate-[bannerSlide_0.4s_ease-out]"
                    :
                    ""
                }
            `}>
                <div className="flex flex-col absolute inset-0">
                    {teamName &&
                        <div className="flex p-2 items-center justify-center w-full border-2 border-orange-400 rounded-2xl gap-3 text-lg bg-orange-950">
                            <span className="animate-bounce">🔔</span><span className="text-yellow-600">Buzzed First: </span>
                            <span className="
                                text-xl
                                font-black
                                text-white
                                ">
                                {teamName}
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner