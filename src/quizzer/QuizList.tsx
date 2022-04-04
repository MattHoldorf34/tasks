import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizPage } from "./QuizPage";
import { QuizView } from "./QuizView";

export const QuizList = ({
    quizzes
}: {
    quizzes: Quiz[];
    showModal: () => void;
}) => {
    const [displayId, setDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
        console.log(displayId);
    };

    return (
        <div className="quiz_list">
            {!displayId && (
                <>
                    {quizzes.map((quiz: Quiz) => (
                        <QuizPage
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        ></QuizPage>
                    ))}
                </>
            )}
            {quizzes.map((quiz: Quiz) => {
                if (displayId === quiz.id) {
                    return <QuizView key={quiz.id} quiz={quiz}></QuizView>;
                }
            })}
        </div>
    );
};
