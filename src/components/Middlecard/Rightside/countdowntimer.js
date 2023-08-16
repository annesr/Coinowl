import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [days, setDays] = useState(1);
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);

    return (
        <div className="w-[343px] h-11 pl-3 pr-1.5 py-2.5 bg-gradient-to-b from-slate-800 to-zinc-950 rounded-[10px] border border-lime-400 border-opacity-50 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch justify-between items-center gap-1.5 inline-flex">
                <div className="text-lime-400 text-xs font-semibold leading-none">Next unlock in:</div>
                <div className="justify-start items-center gap-0.5 flex">
                    <div className="justify-center items-center gap-0.5 flex">
                        <div className="px-1.5 py-1 bg-indigo-600 rounded-md justify-center items-center gap-2.5 flex">
                            <div className="text-slate-200 text-xs font-bold leading-none">{days.toString().padStart(2, '0')}</div>
                        </div>
                        <div className="text-slate-600 text-opacity-70 text-xs font-semibold leading-none">d</div>
                    </div>
                    <div className="justify-center items-center gap-0.5 flex">
                        <div className="px-1.5 py-1 bg-gray-800 rounded-md justify-center items-center gap-2.5 flex">
                            <div className="text-slate-400 text-xs font-bold leading-none">{hours.toString().padStart(2, '0')}</div>
                        </div>
                        <div className="text-slate-600 text-opacity-70 text-xs font-semibold leading-none">h</div>
                    </div>
                    <div className="justify-center items-center gap-0.5 flex">
                        <div className="px-1.5 py-1 bg-gray-800 bg-opacity-30 rounded-md justify-center items-center gap-2.5 flex">
                            <div className="text-slate-400 text-xs font-bold leading-none">{minutes.toString().padStart(2, '0')}</div>
                        </div>
                        <div className="text-slate-600 text-opacity-70 text-xs font-semibold leading-none">m</div>
                    </div>
                    <div className="justify-center items-center gap-0.5 flex">
                        <div className="px-1.5 py-1 bg-gray-800 bg-opacity-30 rounded-md justify-center items-center gap-2.5 flex">
                            <div className="text-slate-400 text-xs font-bold leading-none">{seconds.toString().padStart(2, '0')}</div>
                        </div>
                        <div className="text-slate-600 text-opacity-70 text-xs font-semibold leading-none">s</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;
