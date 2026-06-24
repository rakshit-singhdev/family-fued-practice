import { teamColours } from "../../helper/constants.js"

const ScoreBox = ({ self, score, name, colour }) => {
    return (
        <div className={`flex flex-col bg-${colour}-600 border-2 border-${colour}-400 p-4 text-center rounded-xl`}>
            <span className={`text-${colour}-100 text-xs font-semibold uppercase`}>
                {name}
            </span>
            <span className="text-5xl font-black text-white">
                {score}
            </span>
            <span className={`text-${colour}-200 text-xs`}>
                {self ? "My score" : "Opponent"}
            </span>
        </div>
    )
}

const Scores = ({ teamId, scores, names }) => {

    return (
        <div className="grid grid-cols-2 gap-3 px-4 pt-4">
            <ScoreBox
                score={scores[teamId]}
                name={names[teamId]}
                colour={teamColours[teamId]}
                self
            />

            {scores.map((score, index) =>
                index !== teamId ? (
                    <ScoreBox
                        key={index}
                        score={score}
                        name={names[index]}
                        colour={teamColours[index]}
                    />
                ) : null
            )}
        </div>
    );
};

export default Scores