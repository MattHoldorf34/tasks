import React from "react";
import { Quiz } from "../interfaces/quiz";
import { DisplayQuiz } from "./DisplayQuiz";

export const QuizView = ({ quiz }: { quiz: Quiz }) => {
    return (
        <div className="quiz_page">
            {<DisplayQuiz quiz={quiz}></DisplayQuiz>}
        </div>
    );
};
