import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeft] = useState<number>(3);
    const [rightDie, setRight] = useState<number>(4);
    function RollLeft(): void {
        setLeft(d6);
    }
    function RollRight(): void {
        setRight(d6);
    }

    return (
        <div>
            <div>
                <Button onClick={RollLeft}>Roll Left</Button>
                <span data-testid="left-die">{leftDie}</span>
                <Button onClick={RollRight}>Roll Right</Button>
                <span data-testid="right-die">{rightDie}</span>
                <div>
                    {rightDie === leftDie && leftDie !== 1 && <div>Win</div>}
                    {rightDie === leftDie && leftDie === 1 && <div>Lose</div>}
                </div>
            </div>
        </div>
    );
    /*
    export function TwoDice(): JSX.Element {

    const [d1, setD1] = useState<number>(1);

    const [d2, setD2] = useState<number>(2);

    function RollLeft(): void {

        setD1(d6);

    }

    function RollRight(): void {

        setD2(d6);

    }

    return (

        <div>

            <Button onClick={RollLeft}>Roll Left</Button>

            <span data-testid="left-die">{d1}</span>

            <Button onClick={RollRight}>Roll Right</Button>

            <span data-testid="right-die">{d2}</span>

            {d1 === d2 && d1 === 1 && <div>Lose</div>}

            {d1 === d2 && d1 !== 1 && <div>Win</div>}

        </div>

    );

}
*/
}
