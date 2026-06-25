import TopBar from "../components/team/TopBar.jsx";
import Scores from "../components/team/Scores.jsx";
import Buzzer from "../components/team/Buzzer.jsx";
import AnswerBoard from "../components/AnswerBoard.jsx";
import QuestionBox from "../components/team/QuestionBox.jsx";
import BuzzerResult from "../components/team/BuzzerResult.jsx";
import StrikePanel from "../components/team/StrikePanel.jsx";
import WaitBanner from "../components/team/WaitBanner.jsx";
import PointsPanel from "../components/PointsPanel.jsx";

const Team = () => {

    const teamId = 1;

    const names = [
        "Sample Team 1",
        "Sample Team 2"
    ];

    const scores = [0, 0];

    const phase = 'play'

    const buzzWinner = 0;
    // const turn = 1;

    return (
        <div className="h-screen flex flex-col text-gray-100 bg-slate-900">
            <TopBar teamId={teamId} name={names[teamId]} />
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500">
                <Scores teamId={teamId} scores={scores} names={names} />
                <WaitBanner phase={phase} />
                {
                    phase == 'face_off' && buzzWinner == null &&
                    <Buzzer />
                }
                {
                    phase == 'face_off' && buzzWinner != null &&
                    <BuzzerResult isMe={buzzWinner == teamId} name={names[buzzWinner]} />
                }
                <div className="grid grid-cols-2  m-2 p-2">
                    <StrikePanel /><PointsPanel />
                </div>
                <QuestionBox />
                <div className="p-4">
                    <AnswerBoard />
                </div>
            </div>
        </div>
    )
}

export default Team