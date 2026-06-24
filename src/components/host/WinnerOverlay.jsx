import { useState } from "react";

const WinnerOverlay = ({
    show = false,
    winner = "Sample Team 2",
    score1 = 0,
    score2 = 0,
    team1name = "Sample Team 1",
    team2name = "Sample Team 2",
}) => {

    const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];

    const [particles] = useState(() =>
        Array.from({ length: 80 }, () => ({
            l: `${Math.random() * 100}%`,
            bg: colors[Math.floor(Math.random() * colors.length)],
            w: `${Math.random() * 8 + 5}px`,
            h: `${Math.random() * 16 + 8}px`,
            adu: `${Math.random() * 3 + 2}s`,
            ade: `${Math.random() * 2}s`,
            br: Math.random() > 0.5 ? "50%" : "2px",
        }))
    );

    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 z-99">
                {particles.map((particle, index) => (
                    <div
                        key={index}
                        className="absolute -top-2.5 animate-[confettiFall_linear_infinite]"
                        style={{
                            left: particle.l,
                            width: particle.w,
                            height: particle.h,
                            backgroundColor: particle.bg,
                            borderRadius: particle.br,
                            animationDuration: particle.adu,
                            animationDelay: particle.ade,
                        }}
                    />
                ))}
            </div>
            <div className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/85
            ">
                <div className="
                text-center 
                animate-[winnerAppear_0.8s_cubic-bezier(0.175,0.885,0.32,1.275)] 
                "
                >
                    <div className="text-8xl mb-4">
                        🏆
                    </div>
                    <h1 className="
                    text-6xl font-black
                    text-yellow-400
                    tracking-tight
                    [text-shadow:0_0_40px_rgba(251,191,36,0.8)]
                    ">
                        WINNER!
                    </h1>

                    <h2 className="
                    mt-3
                    text-5xl font-black
                    text-white animate-pulse
                    ">
                        {winner}
                    </h2>
                    <div className="
                    mt-8
                    flex items-center justify-center gap-10
                    ">
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">
                                {team1name}
                            </p>

                            <p className="
                            text-4xl font-black
                            text-yellow-400
                            ">
                                {score1}
                            </p>
                        </div>
                        <div className="
                        text-5xl
                        text-gray-500
                        ">
                            VS
                        </div>
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">
                                {team2name}
                            </p>

                            <p className="
                            text-4xl font-black
                            text-yellow-400
                            ">
                                {score2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinnerOverlay