import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, updateAnswer] = useState<string>("");

    function setAnswer(event: ChangeEvent) {
        updateAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={setAnswer} />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
