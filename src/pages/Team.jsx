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

const Team = () => {
    const teamId = 1;

    const { teamNames, phase, buzzWinner, activeTeamId } = useGameStore();

    return (
        <div className="h-screen flex flex-col text-gray-100 bg-slate-900">
            <TopBar teamId={teamId} />
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500">
                <Scores teamId={teamId}/>
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
                    <div className="md:w-1/12"></div>
                    <div className="flex w-11/12">
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