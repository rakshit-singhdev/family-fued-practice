import AnswerBoard from "../components/host/AnswerBoard.jsx";
import Banner from "../components/host/Banner.jsx";
import PointsPanel from "../components/PointsPanel.jsx";
import QuestionBox from "../components/host/QuestionBox.jsx";
import StrikePanel from "../components/host/StrikePanel.jsx";
import TopBar from "../components/host/TopBar.jsx";
import WinnerOverlay from "../components/host/WinnerOverlay.jsx";

const answers = [
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
];

const Host = () => {
    return (
        <>
            <div
                className="
            h-screen flex flex-col text-gray-50
            bg-slate-950 
            bg-(image:--background-host) 
            "
            >
                <TopBar />
                <div className="flex-1 py-4 px-5 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500 ">
                    <QuestionBox />
                    <Banner />
                    <div className="flex flex-col md:flex-row py-12 w-full gap-4 md:items-center">
                        <div className="flex-1">
                            <AnswerBoard answers={answers} />
                        </div>
                        <div className="flex flex-row md:flex-col gap-4">
                            <StrikePanel />
                            <PointsPanel />
                        </div>
                    </div>
                </div>
            </div>
            <WinnerOverlay />
        </>
    );
};

export default Host;