import React from "react";
import { Question } from "../interfaces/question";
import { Form, Button } from "react-bootstrap";

export const DisplayQuestion = ({
    index,
    question,
    submitted,
    handleSubmit,
    addPoints
}: {
    index: number;
    question: Question;
    submitted: boolean;
    handleSubmit: (index: number) => void;
    addPoints: (p: number) => void;
}) => {
    const handleSubmitClick = () => {
        handleSubmit(index);
        if (question.guess === question.expected) {
            addPoints(question.points);
        }
    };

    return (
        <>
            <hr />
            <div className="question">
                <div className="qheader">
                    <h4 data-testid="qbody">
                        {index + 1}. {question.body}
                    </h4>
                    <h4>
                        {question.points} pt{question.points !== 1 ? "s" : ""}
                    </h4>
                </div>
                <div className="input">
                    {question.type === "short_answer_question" && (
                        <Form.Group controlId="formShortAnswerBox">
                            <Form.Control
                                data-testid="select-option"
                                value={question.guess}
                            ></Form.Control>
                        </Form.Group>
                    )}
                    {question.type === "multiple_choice_question" && (
                        <div>
                            {question.options.map(
                                (option: string, i: number) => (
                                    <Form.Check
                                        type="radio"
                                        name={"questionChoice" + index}
                                        key={option + " | " + i}
                                        label={option}
                                        value={option}
                                        checked={question.guess === option}
                                    />
                                )
                            )}
                        </div>
                    )}
                    <div className="checkInput">
                        <h2 className={submitted ? "" : "hidden"}>
                            {question.guess === question.expected ? "✔️" : "❌"}
                        </h2>
                        <Button
                            disabled={submitted}
                            className="submit_btn"
                            onClick={handleSubmitClick}
                        >
                            Submit Answer
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
