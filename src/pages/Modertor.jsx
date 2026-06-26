import TopBar from "../components/host/TopBar.jsx"

const Modertor = () => {
    return (
        <div>
            <div className="overflow-hidden">
                <TopBar />
            </div>
            <div className="flex-1 py-4 px-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500">
                <div className="flex gap-2">

                </div>

            </div>
        </div>
    )
}

export default Modertor