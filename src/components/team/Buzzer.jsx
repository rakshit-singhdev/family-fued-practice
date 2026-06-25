import { useState } from "react";
import { toast } from "sonner";

const Buzzer = () => {

    const [disabled, setDisabled] = useState(false);

    const handleBuzz = async () => {
        setDisabled(true);

        const sound = new Audio("/sounds/buzzer-or-wrong-answer.mp3");

        await sound.play();

        await new Promise(resolve => setTimeout(resolve, 1000));

        toast.info("Buzzer press registered!", {
            duration: 1000,
        });

    };

    return (
        <div className="px-4 pt-6 pb-13">
            <div className="flex justify-center">
                <button
                    disabled={disabled}
                    onClick={handleBuzz}
                    className={`
                        w-55
                        h-55
                        rounded-full
                        text-white
                        font-black
                        text-[2.4rem]
                        tracking-wide
                        select-none
                        transition-all
                        duration-75
                        ${disabled ? "translate-y-4" : "active:translate-y-4"}
                        animate-pulse
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                    `}
                    style={{
                        background:
                            "radial-gradient(circle at 35% 30%, #f87171, #dc2626 50%, #991b1b)",
                        boxShadow: `
                            0 0 0 12px #7f1d1d,
                            0 16px 0 12px #3b0000,
                            0 16px 40px 12px rgba(0,0,0,.65),
                            inset 0 -8px 14px rgba(0,0,0,.35),
                            inset 0 8px 14px rgba(255,255,255,.22)
                            `,
                    }}
                >
                    BUZZ
                </button>
            </div>
        </div >
    )
}

export default Buzzer