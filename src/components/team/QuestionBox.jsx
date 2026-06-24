const QuestionBox = ({ question ="Name a reason someone might be late for work" }) => {
    return (
        <div className="
        flex justify-between
        items-center rounded-2xl
        bg-[linear-gradient(135deg,#1e293b,#0f172a)]
        border-2 border-slate-700
        px-6 py-4 m-4 text-lg
        md:px-6 md:text-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        ">
            <div className="
            flex flex-col 
            ">
                <p className="
                text-xs uppercase text-gray-500
                tracking-wider
                ">
                    Question
                </p>
                <h1 className="
                font-bold text-xl text-amber-50
                ">
                    {question ?? 'Waiting for question...'}
                </h1>
            </div>
            
        </div>
    )
}

export default QuestionBox