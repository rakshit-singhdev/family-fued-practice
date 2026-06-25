const AnswerBlock = ({ number, answer }) => {
    const revealed = answer?.revealed;
    return (
        <div className="md:h-16 h-10 rounded-xl overflow-hidden perspective-midrange">
            <div className={`
            relative w-full h-full
            transform-3d
            ${revealed ?
                    "animate-[cardFlip_0.6s_cubic-bezier(0.4,0,0.2,1)_forwards]"
                    :
                    ""
                }
            `}>
                <div className={`
                    absolute inset-0
                    flex items-center 
                    border-2 font-bold
                    md:text-xl text-lg
                    ${revealed
                        ? `bg-linear-135 from-amber-800 via-amber-700 to-amber-600 border-amber-500 px-4 justify-between`
                        : `${number ? "bg-linear-135 from-blue-800 via-blue-700 to-blue-900"
                            : "bg-linear-135 from-blue-900 to-blue-950"}
                         border-blue-500 text-blue-400 justify-center`
                    }
                `}>
                    {revealed ? (
                        <>
                            <span>{number}.&nbsp;&nbsp;{answer.text}</span>
                            <span>{answer.points}</span>
                        </>
                    ) : (
                        <span>{number}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

const AnswerBoard = ({ questionStatus = true, answers = [] }) => {

    const totalTiles = Math.max(8, answers.length);

    // 2 columns for <=8 answers, then add columns every 4 answers
    const cols = Math.max(2, Math.ceil(totalTiles / 4));

    // Number of rows needed
    const rows = Math.ceil(totalTiles / cols);

    return questionStatus ? (
        <div
            className="grid gap-3"
            style={{
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
            }}
        >
            {Array.from({ length: rows }).flatMap((_, row) =>
                Array.from({ length: cols }, (_, col) => {
                    const index = row + col * rows;
                    const hasAnswer = index < answers.length;
                    return (
                        <AnswerBlock
                            key={`${row}-${col}`}
                            number={hasAnswer ? index + 1 : undefined}
                            answer={hasAnswer ? answers[index] : null}
                        />
                    );
                })
            )}
        </div>
    ) : (
        <div className="flex items-center justify-center text-gray-500">
            Load a question to see the board
        </div>
    );
};

export default AnswerBoard