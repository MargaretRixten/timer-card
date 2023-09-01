import './timer.scss';
import React, {useState} from "react";

function Timer() {
    const [startNumber, setStartNumber] = useState<number>(4);
    const onAnimationStart = (e: React.AnimationEvent<HTMLDivElement>) => {

    }
    const onAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
        setStartNumber(startNumber => startNumber - 1)
    }
    return (
        <div className="timer">
            <div className="timer-block">
                <h2 className="block-title">hours</h2>
                <div data-current-number={startNumber} data-next-number={startNumber - 1} className="timer-card flip">
                    <div onAnimationEnd={onAnimationEnd} onAnimationStart={onAnimationStart} className="top-number">{startNumber}</div>
                    <div className="bottom-number">{startNumber}</div>
                </div>
            </div>
        </div>
    );
}

export default Timer;