import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inprogress, setStart] = useState<boolean>(false);
    const [attempts, changeAttempts] = useState<number>(4);
    function startQuiz(): void {
        setStart(true);
        changeAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setStart(false);
    }
    function useMulligan(): void {
        changeAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                Attempts: <span>{attempts}</span>
                <Button
                    onClick={() => startQuiz()}
                    disabled={inprogress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => stopQuiz()} disabled={!inprogress}>
                    Stop Quiz
                </Button>
                <Button onClick={() => useMulligan()} disabled={inprogress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
