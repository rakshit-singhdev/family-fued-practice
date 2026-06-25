import { useGameStore } from "../store/game.store.js"

const PointsPanel = () => {

    const { roundPoints } = useGameStore();
    
    return (
        <div key={roundPoints} className="
        flex flex-col items-center justify-center border-2 flex-1 border-lime-500 rounded-2xl px-8 py-2 bg-linear-135 from-lime-950 to-lime-900 
        animate-[scorePop_0.3s_ease-out]
        ">
            <span className="block text-center text-lime-500 w-min ">Round Points</span>
            <span className="block font-bold text-center text-4xl text-lime-300">
                {roundPoints}
            </span>
        </div>
    )
}

export default PointsPanel