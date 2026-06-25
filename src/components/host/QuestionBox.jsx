import { useGameStore } from "../../store/game.store.js";

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


const QuestionBox = () => {

    const { teamNames, activeTeamId, question } = useGameStore();

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
                <h1 className="
                font-bold text-xl text-amber-50
                ">
                    {question ?? 'Waiting for question...'}
                </h1>
                <p className="
                    text-xs uppercase text-gray-500
                    tracking-wider
                    ">
                    Survey Says...
                </p>
            </div>
            {
                teamNames[activeTeamId] && <CurrentTeam currTeam={teamNames[activeTeamId]} />
            }
        </div>
    )
}

export default QuestionBox