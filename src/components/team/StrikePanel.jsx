import { Strike } from "../host/StrikePanel.jsx"


const StrikePanel = ({ strikes=2 }) => {
    
    return (
        <div className="flex gap-2 items-center justify-center mb-2">
            {[...Array(3)].map((_, index) => (
                <Strike
                    key={index}
                    active={index < strikes}
                />
            ))}
            <span className="uppercase text-gray-500 text-sm ml-2">Strikes</span>
        </div>
    )
}

export default StrikePanel