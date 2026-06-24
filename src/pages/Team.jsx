import TopBar from "../components/team/TopBar.jsx";
import Scores from "../components/team/Scores.jsx";
import Buzzer from "../components/team/Buzzer.jsx";
import AnswerBoard from "../components/team/AnswerBoard.jsx";
import QuestionBox from "../components/team/QuestionBox.jsx";
import BuzzerResult from "../components/team/BuzzerResult.jsx";
import StrikePanel from "../components/team/StrikePanel.jsx";
import WaitBanner from "../components/team/WaitBanner.jsx";

const Team = () => {

    const teamId = 0;

    const names = [
        "Sample Team 1",
        "Sample Team 2"
    ];

    const scores = [0, 0];

    const phase = 'play'

    const buzzWinner = 0;
    const turn = 1;

    return (
        <div className="min-h-screen flex flex-col text-gray-100 bg-slate-900">
            <TopBar teamId={teamId} name={names[teamId]} />
            <div className="flex flex-col">
                <Scores teamId={teamId} scores={scores} names={names} />
                <WaitBanner phase={phase} />
                {phase == 'face_off' && buzzWinner == null && <Buzzer />}
                {phase == 'face_off' && buzzWinner != null && <BuzzerResult isMe={buzzWinner == teamId} name={names[buzzWinner]} />}
                <StrikePanel />
                <QuestionBox />
                <AnswerBoard />
            </div>
        </div>
    )
}

export default Team