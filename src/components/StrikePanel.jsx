import { Strike } from "./Strike.jsx"

const StrikePanel = ({ strikes = 2 }) => {

    return (
        <div className="block flex-1 border-2 border-slate-700  p-4 rounded-2xl bg-slate-800">
            <span className="
            uppercase text-center block 
            ">Strikes</span>
            <div className="flex justify-center gap-0.5 md:gap-2">
                {[...Array(3)].map((_, index) => (
                    <Strike
                        key={index}
                        active={index < strikes}
                    />
                ))}
            </div>
        </div>
    )
}

export default StrikePanel