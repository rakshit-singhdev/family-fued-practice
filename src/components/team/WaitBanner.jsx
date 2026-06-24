
const WaitBanner = ({ phase }) => {
    return (
        <div className="p-4 pt-3">
            {(phase == 'play' || phase == 'steal') &&
                < div id="statusBanner" className="rounded-xl p-3 text-center border-2 border-green-500 bg-green-900 pulse animate-[pulse2_1.5s_ease-in-out_infinite]">
                    <p className="text-white font-black text-lg">YOUR TURN!</p>
                </div>
            }
            {
                phase == 'idle' && <div id="waitBanner" className="rounded-xl p-3 text-center border-2 border-gray-600 bg-gray-800 mt-4">
                    <p className="text-gray-400 font-semibold" id="waitText">Waiting...</p>
                </div>
            }
        </div >
    )
}

export default WaitBanner