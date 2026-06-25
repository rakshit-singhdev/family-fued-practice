const PointsPanel = ({ score = 0 }) => {
    return (
        <div key={score} className="
        block border-2 flex-1 border-lime-500 rounded-2xl px-12 py-2 bg-linear-135 from-lime-950 to-lime-900
        animate-[scorePop_0.3s_ease-out]
        ">
            <span className="block text-center text-lime-500 ">Round Points</span>
            <span className="block font-bold text-center text-4xl text-lime-300">
                {score}
            </span>
        </div>
    )
}

export default PointsPanel