import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function GiveAttempts(): JSX.Element {
    const [attempts, updateAttempts] = useState<number>(3);
    const [userAttempts, inputAttempts] = useState<number>(0);
    return (
        <div>
            <Form.Group controlId="quizTaker">
                <Form.Label>Enter the # of attempts to gain.</Form.Label>
                <Form.Control
                    value={userAttempts}
                    type="number"
                    onChange={(event: ChangeEvent) =>
                        inputAttempts(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => updateAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button onClick={() => updateAttempts(attempts + userAttempts)}>
                gain
            </Button>
            Attempts: {attempts}
        </div>
    );
}
