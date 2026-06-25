import { teamColours, phaseColors } from "../../helper/constants.js";

const colours = {
    blue: {
        gradient: "from-blue-700 to-blue-600",
        text: "text-blue-200",
    },
    yellow: {
        gradient: "from-yellow-700 to-yellow-600",
        text: "text-yellow-200",
    },
    red: {
        gradient: "from-red-700 to-red-600",
        text: "text-red-200",
    },
    green: {
        gradient: "from-green-700 to-green-600",
        text: "text-green-200",
    },
    purple: {
        gradient: "from-purple-700 to-purple-600",
        text: "text-purple-200",
    },
    orange: {
        gradient: "from-orange-700 to-orange-600",
        text: "text-orange-200",
    },
    pink: {
        gradient: "from-pink-700 to-pink-600",
        text: "text-pink-200",
    },
    teal: {
        gradient: "from-teal-700 to-teal-600",
        text: "text-teal-200",
    },
};

const TopBar = ({ teamId, name, phase = "idle", round = 1 }) => {
    const colour = colours[teamColours[teamId]];

    return (
        <header
            className={`
                bg-linear-to-r
                ${colour.gradient}
                shadow-lg px-4 py-3 flex items-center justify-between
            `}
        >
            <div>
                <h1 className="text-2xl font-black text-white tracking-tight">
                    {name}
                </h1>

                <span
                    className={`
                        inline-block text-xs font-bold px-2 py-0.5 rounded-full
                        uppercase tracking-wider mt-0.5
                        ${phaseColors[phase]}
                    `}
                >
                    {phase}
                </span>
            </div>

            <div className="text-right">
                <p className={`${colour.text} text-xs`}>
                    Round
                </p>

                <p className="text-3xl font-black text-white leading-none">
                    {round}
                </p>
            </div>
        </header>
    );
};

export default TopBar;