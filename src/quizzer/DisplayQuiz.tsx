import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { DisplayQuestion } from "./DisplayQuestion";

export const DisplayQuiz = ({ quiz }: { quiz: Quiz }) => {
    const [points, setPoints] = useState<number>(0);
    const filteredQuestions = quiz.questions.filter(
        (q: Question): boolean => (quiz.open && q.published) || !quiz.open
    );
    const [submitArr, setSubmitArr] = useState<boolean[]>(
        new Array(filteredQuestions.length)
    );
    const handleQuestionSubmit = (index: number) => {
        const newSubmitArr = [...submitArr];
        newSubmitArr.splice(index, 1, true);
        setSubmitArr(newSubmitArr);
    };
    const totalPoints = filteredQuestions.reduce(
        (prev: number, q: Question): number => prev + q.points,
        0
    );

    const addPoints = (p: number) => {
        setPoints((prevCount) => prevCount + p);
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-baseline">
                    <h1 className="title">{quiz.title}</h1>
                </div>
                <div>
                    <p>
                        {filteredQuestions.length} Question
                        {filteredQuestions.length !== 1 ? "s" : ""}
                    </p>
                </div>
            </div>
            <p className="desc">{quiz.description}</p>
            {filteredQuestions.map((q: Question, index: number) => (
                <DisplayQuestion
                    key={quiz.id + "|" + q.id}
                    index={index}
                    question={q}
                    submitted={submitArr[index]}
                    handleSubmit={handleQuestionSubmit}
                    addPoints={addPoints}
                ></DisplayQuestion>
            ))}
            <hr />
            <div className="footer">
                <span className="score_report">
                    {points}/{totalPoints}
                </span>
            </div>
        </>
    );
};
