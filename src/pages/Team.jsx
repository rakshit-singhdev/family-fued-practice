import TopBar from "../components/team/TopBar.jsx";
import Scores from "../components/team/Scores.jsx";
import Buzzer from "../components/team/Buzzer.jsx";
import AnswerBoard from "../components/AnswerBoard.jsx";
import QuestionBox from "../components/team/QuestionBox.jsx";
import BuzzerResult from "../components/team/BuzzerResult.jsx";
import StrikePanel from "../components/StrikePanel.jsx";
import WaitBanner from "../components/team/WaitBanner.jsx";
import PointsPanel from "../components/PointsPanel.jsx";
import { useGameStore } from "../store/game.store.js";
import { teamColours } from "../helper/constants.js";

const Team = () => {

    const teamId = 1;

    const { teamNames, phase, buzzWinner, activeTeamId } = useGameStore();

    const scroll = {
        blue: 'scrollbar-thumb-blue-500',
        yellow: 'scrollbar-thumb-yellow-500',
        red: 'scrollbar-thumb-red-500',
        green: 'scrollbar-thumb-green-500',
        purple: 'scrollbar-thumb-purple-500',
        orange: 'scrollbar-thumb-orange-500',
        pink: 'scrollbar-thumb-pink-500',
        teal: 'scrollbar-thumb-teal-500',
    };

    return (
        <div className="h-screen flex flex-col text-gray-100 bg-slate-900">
            <TopBar teamId={teamId} />
            <div className={`flex-1 overflow-y-auto scrollbar-thin ${scroll[teamColours[teamId]]}`}>
                <Scores teamId={teamId} />
                <WaitBanner active={teamId == activeTeamId} />
                <QuestionBox />
                {
                    phase == 'face_off' && buzzWinner == null &&
                    <Buzzer />
                }
                {
                    phase == 'face_off' && buzzWinner != null &&
                    <BuzzerResult isMe={buzzWinner == teamId} name={teamNames[buzzWinner]} />
                }
                <div className="flex flex-row gap-4 md:m-4 mr-4">

                    <div className="hidden md:block md:invisible">
                        <PointsPanel />
                    </div>
                    <div className="flex w-11/12 ml-4 md:ml-0">
                        <StrikePanel />
                    </div>
                    <div className="flex">
                        <PointsPanel />
                    </div>
                </div>
                {
                    phase == 'play' && buzzWinner != null &&
                    <div className="p-4">
                        <AnswerBoard />
                    </div>
                }
            </div>
        </div>
    )
}

export default Team