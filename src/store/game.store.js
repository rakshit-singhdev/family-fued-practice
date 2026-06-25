import { create } from "zustand";

export const useGameStore = create((set) => ({
    activeTeamId: 1,
    round: 1,
    phase: "play",
    teamNames: [
        "Sample Team 1",
        "Sample Team 2"
    ],
    scores: [0, 0],
    strikes: 2,
    roundPoints: 10,
    buzzWinner: 0,
    question: "Name a common household pet",
    answers: [
        {
            text: "DOGS",
            points: 35,
            revealed: true
        },
        {
            text: "CATS",
            points: 25,
            revealed: false
        },
        {
            text: "ELEPHANT",
            points: 15,
            revealed: true
        },
        {
            text: "OWL",
            points: 35,
            revealed: true
        },
        {
            text: "PARROT",
            points: 25,
            revealed: false
        },
        {
            text: "HORSE",
            points: 15,
            revealed: true
        }
    ],
    setActiveTeamId: (activeTeamId) => set({ activeTeamId }),
    setRound: (round) => set({ round }),
    setPhase: (phase) => set({ phase }),
    setScores: (scores) => set({ scores }),
    increaseStrikes: () =>
        set((state) => ({
            strikes: Math.min(3, state.strikes + 1)
        })),

    decreaseStrikes: () =>
        set((state) => ({
            strikes: Math.max(0, state.strikes - 1)
        })),
    setBuzzWinner: (buzzWinner) => set({ buzzWinner }),
    setQuestion: (question) => set({ question }),
    setAnswers: (answers) => set({ answers }),
    revealAnswer: (index) =>
        set((state) => ({
            answers: state.answers.map((answer, i) =>
                i === index
                    ? { ...answer, revealed: true }
                    : answer
            )
        }))
}));