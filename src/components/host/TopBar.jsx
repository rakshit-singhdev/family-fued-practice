import { phaseColors } from "../../helper/constants.js";

const TeamScore = ({ name, score, active = true }) => {
    return (
        <div
            className={`
                relative overflow-hidden
                min-w-40 px-4 py-2
                rounded-xl text-center border-2
                
                before:absolute
                before:top-0
                before:left-0
                before:w-full
                before:bg-linear-to-r
                
                after:absolute
                after:left-0
                after:w-full
                after:h-px
                after:bg-white/20
                
                ${active
                    ? `
                    animate-pulse
                    before:h-1
                    after:top-1
                    border-amber-500
                    bg-linear-135 from-stone-900 to-stone-800
                    
                    before:from-amber-500
                    before:via-yellow-300
                    before:to-amber-500
                    shadow-[0_0_20px_rgba(251,191,36,0.3),0_10px_25px_rgba(0,0,0,0.6)]
                    `
                    : `
                    before:h-0.5
                    after:top-0.5
                    border-violet-900
                    bg-linear-135 from-slate-900 to-indigo-900

                    before:from-purple-600
                    before:via-purple-400
                    before:to-purple-600
                    shadow-[0_10px_25px_rgba(0,0,0,0.6)]
                    `
                }
            `}
        >
            <p className="
            text-xs uppercase tracking-widest
            text-gray-300
            ">{name}</p>
            <h1 className="text-4xl font-black text-gray-50">{score}</h1>
        </div>
    )
}

export const Logo = ({ phase, round }) => {

    
    return (
        <div className="
            flex-1 text-center
        ">
            <h1 className="text-3xl font-black uppercase text-yellow-400 italic tracking-widest">
                Clan Quarrel
            </h1>
            <div className="flex justify-center items-center gap-2">

                <p className={`
                px-4 py-0.5
                ${phaseColors[phase]}
                rounded-2xl uppercase
                `}> {phase.replaceAll("_", " ")}</p>

                <p className="text-gray-500 tracking-tight">
                    Round <span className="font-bold text-gray-50">{round}</span>
                </p>
            </div>
        </div>
    )
}

const TopBar = ({ team1name = "sample Team 1", team2name = "sample Team 2", phase = "idle", round = 0 }) => {
    return (
        <div className="border-b-2 border-amber-600 bg-[linear-gradient(180deg,#1a0a00,#2d1500)] shadow-lg shadow-amber-600/30">
            <div className="md:hidden flex flex-col gap-4 items-center px-6 py-2">
                <Logo phase={phase} round={round} />
                <div className="flex justify-between w-full">
                    <TeamScore name={team1name} score={0} />
                    <TeamScore name={team2name} score={0} />
                </div>
            </div>

            <div className="hidden md:flex items-center justify-between gap-4 px-6 py-2">
                <TeamScore name={team1name} score={0} />
                <Logo phase={phase} round={round} />
                <TeamScore name={team2name} score={0} />
            </div>
        </div>
    );
};

export default TopBar