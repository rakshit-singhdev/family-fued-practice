import { teamColours, phaseColors } from "../../helper/constants.js"

const TopBar = ({ teamId, name, phase = 'idle', round = 1 }) => {
    return (
        <header
            className={`
            bg-linear-to-r 
            from-${teamColours[teamId]}-700 to-${teamColours[teamId]}-600
            shadow-lg px-4 py-3 flex items-center justify-between
            `}>
            <div>
                <h1 className="text-2xl font-black text-white tracking-tight">{name}</h1>
                <span
                    className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 ${phaseColors[phase]}`}>{phase}</span>
            </div>
            <div className="text-right">
                <p className={`text-${teamColours[teamId]}-200 text-xs1`}>Round</p>
                <p className="text-3xl font-black text-white leading-none">{round}</p>
            </div>
        </header>
    )
}

export default TopBar