const CurrentTeam = ({ currTeam }) => {
    return (
        <div className="flex flex-col gap-2 w-min h-min bg-yellow-600 border border-yellow-400 rounded-lg px-3 py-1.5 text-center shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            <span className="text-white text-xs">
                Playing
            </span>
            <span className="font-black text-sm md:w-max">
                {currTeam}
            </span>
        </div>
    )
}


const QuestionBox = ({ question ="Name a reason someone might be late for work", currTeam = "Sample Team 1" }) => {
    return (
        <div className="
        flex justify-between
        items-center rounded-2xl
        bg-[linear-gradient(135deg,#1e293b,#0f172a)]
        border-2 border-slate-700
        px-6 py-3 text-lg
        md:px-6 md:text-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        ">
            <div className="
            flex flex-col 
            ">
                <p className="
                text-xs uppercase text-gray-500
                tracking-wider
                ">
                    Survey Says...
                </p>
                <h1 className="
                font-bold text-xl text-amber-50
                ">
                    {question ?? 'Waiting for question...'}
                </h1>
            </div>
            {
                currTeam && <CurrentTeam currTeam={currTeam} />
            }
        </div>
    )
}

export default QuestionBox