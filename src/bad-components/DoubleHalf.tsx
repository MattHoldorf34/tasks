import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [value, newValue] = useState<number>(10);
    function Doubler(): void {
        newValue(value * 2);
    }
    function Halver(): void {
        newValue(value / 2);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
                <Button onClick={Halver}>Halve</Button>
                <Button onClick={Doubler}>Double</Button>;
            </div>
        </div>
    );
}
