import { cp } from "fs";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "blue",
    "red",
    "green",
    "orange",
    "black",
    "white",
    "purple",
    "pink"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("blue");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                The current color is{" "}
                <span
                    style={{ backgroundColor: chosen }}
                    data-testid="colored-box"
                >
                    {" "}
                    {chosen}
                </span>
            </div>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    id={"colors-choice-" + color}
                    label={color}
                    name="colors"
                    value={color}
                    checked={chosen === color}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setChosen(event.target.value)
                    }
                />
            ))}
        </div>
    );
}
