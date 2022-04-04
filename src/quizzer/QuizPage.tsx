import React from "react";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";

export const QuizPage = ({
    quiz,
    handleClick
}: {
    quiz: Quiz;
    handleClick: (id: number) => void;
}) => {
    const filteredQuestions = quiz.questions.filter(
        (q: Question): boolean => (quiz.open && q.published) || !quiz.open
    );

    return (
        <div className="quiz_page">
            <div className="title_page">
                <h3
                    className="title"
                    onClick={() => {
                        handleClick(quiz.id);
                    }}
                >
                    {quiz.title}
                </h3>
            </div>
            <p>
                {filteredQuestions.length} Question
                {filteredQuestions.length !== 1 ? "s" : ""}
            </p>
            <p>{quiz.description}</p>
        </div>
    );
};
