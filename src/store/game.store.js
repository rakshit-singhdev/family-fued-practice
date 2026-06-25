import { create } from "zustand";

export const useGameStore = create((set) => ({
    teamId: 0, // static value for now, will be set by the server in the future
    phase: "face_off",
    teamNames: [
        "Sample Team 1",
        "Sample Team 2"
    ],
    scores: [0, 0],
    strikes: 0,
    roundPoints: 0,
    currentTeam: 0,
    buzzWinner: null,
    setPhase: (phase) => set({ phase }),
    setScores: (scores) => set({ scores }),
    setStrikes: (strikes) => set({ strikes }),
    setBuzzWinner: (buzzWinner) => set({ buzzWinner })
}));