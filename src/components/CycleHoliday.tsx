import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, nextHoliday] = useState<string>("🎊");
    const time: Record<string, string> = {
        "🎊": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🐔",
        "🐔": "🎁",
        "🎁": "🎊"
    };

    const alph: Record<string, string> = {
        "🎁": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🎊",
        "🎊": "🐔",
        "🐔": "🎁"
    };
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={() => nextHoliday((current) => alph[current])}>
                Advance by Alphabet
            </Button>
            ;
            <Button onClick={() => nextHoliday((current) => time[current])}>
                Advance by Year
            </Button>
            ;
        </div>
    );
    /*
    type Holiday =
        | "Halloween"
        | "Christmas"
        | "Fourth of July"
        | "Thanksgiving"
        | "New Year's Eve";
        */
}
