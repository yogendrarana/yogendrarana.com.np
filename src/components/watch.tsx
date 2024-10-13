"use client";

import { useEffect, useState } from "react";

const Watch = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Move the time formatting logic inside the component
    const hours = time.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = String(hours % 12 || 12).padStart(2, "0");
    const formattedMinutes = String(time.getMinutes()).padStart(2, "0");

    return (
        <div className="text-sm">
            {formattedHours}:{formattedMinutes} {ampm}
        </div>
    );
};

export default Watch;
