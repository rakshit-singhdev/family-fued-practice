import Banner from "../components/host/Banner.jsx";
import PointsPanel from "../components/PointsPanel.jsx";
import QuestionBox from "../components/host/QuestionBox.jsx";
import StrikePanel from "../components/StrikePanel.jsx";
import TopBar from "../components/host/TopBar.jsx";
import WinnerOverlay from "../components/host/WinnerOverlay.jsx";
import AnswerBoard from "../components/AnswerBoard.jsx";

const Host = () => {
    return (
        <>
            <div className="
                    h-screen flex flex-col text-gray-50
                    bg-slate-950 
                    bg-(image:--background-host) 
                "
            >
                <TopBar  />
                <div className="flex-1 py-4 px-5 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-900">
                    <QuestionBox />
                    <Banner />
                    <div className="flex flex-col-reverse md:flex-row py-12 w-full gap-4 md:items-center">
                        <div className="flex-1">
                            <AnswerBoard />
                        </div>
                        <div className="flex flex-row md:flex-col gap-4 mb-4 md:mb-0">
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