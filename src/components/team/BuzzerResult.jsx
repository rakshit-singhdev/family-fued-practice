
const BuzzerResult = ({ isMe, name }) => {
    return (
        <div className={`rounded-2xl p-4 text-center border-2 ${isMe ? 'bg-green-900 border-green-500' : 'bg-orange-950 border-orange-700'} m-4 animate-[pulse2_1.5s_ease-in-out_infinite]`}>
            <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${isMe ? 'text-green-400' : 'text-orange-400'}`}>
                {isMe ? '⚡ You Buzzed First!' : '🔔 Buzzer already Pressed'}
            </p>
            <p className={`text-3xl font-black ${isMe ? 'text-green-200' : 'text-white'}`}>{name}</p>
        </div>
    )
}

export default BuzzerResult