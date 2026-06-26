import { teamColours } from "../../helper/constants.js";
import { useGameStore } from "../../store/game.store.js";

// tailwind dos'nt supports dyanamic class

const teamColorClasses = {
    blue: {
        text: "text-blue-200",
        bg: "bg-blue-600",
        border: "border-blue-400",
        light: "text-blue-100",
    },
    yellow: {
        text: "text-yellow-200",
        bg: "bg-yellow-600",
        border: "border-yellow-400",
        light: "text-yellow-100",
    },
    red: {
        text: "text-red-200",
        bg: "bg-red-600",
        border: "border-red-400",
        light: "text-red-100",
    },
    green: {
        text: "text-green-200",
        bg: "bg-green-600",
        border: "border-green-400",
        light: "text-green-100",
    },
    purple: {
        text: "text-purple-200",
        bg: "bg-purple-600",
        border: "border-purple-400",
        light: "text-purple-100",
    },
    orange: {
        text: "text-orange-200",
        bg: "bg-orange-600",
        border: "border-orange-400",
        light: "text-orange-100",
    },
    pink: {
        text: "text-pink-200",
        bg: "bg-pink-600",
        border: "border-pink-400",
        light: "text-pink-100",
    },
    teal: {
        text: "text-teal-200",
        bg: "bg-teal-600",
        border: "border-teal-400",
        light: "text-teal-100",
    },
};

const ScoreBox = ({ self, score, name, colour, active }) => {
    return (
        <div
            className={`
                flex flex-col
                ${teamColorClasses[colour].bg}
                ${teamColorClasses[colour].border}
                ${active ? 'border-4' : 'border-2'}
                p-4 text-center rounded-xl
            `}
        >
            <span className={`${teamColorClasses[colour].light} text-xs font-semibold uppercase`}>
                {name}
            </span>

            <span className="text-5xl font-black text-white">
                {score}
            </span>

            <span className={`${teamColorClasses[colour].text} text-xs`}>
                {self ? "My score" : "Opponent"}
            </span>
        </div>
    );
};

const Scores = ({ teamId }) => {
    
    const { scores, teamNames, activeTeamId } = useGameStore();

    return (
        <div className="grid grid-cols-2 gap-3 px-4 pt-4">
            <ScoreBox
                score={scores[teamId]}
                name={teamNames[teamId]}
                colour={teamColours[teamId]}
                active={activeTeamId === teamId}
                self
            />

            {scores.map((score, index) =>
                index !== teamId ? (
                    <ScoreBox
                        key={index}
                        score={score}
                        name={teamNames[index]}
                        colour={teamColours[index]}
                        active={activeTeamId === index}
                    />
                ) : null
            )}
        </div>
    );
};

export default Scores;