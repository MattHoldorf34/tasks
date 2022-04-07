import React, { useState } from "react";
import { Question } from "../interfaces/question";
import myquizzes from "./quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "./QuizList";
import { AddQuizModal } from "./QuizModal";

const QUIZZES = myquizzes.map(
    (quiz): Quiz => ({
        ...quiz,
        questions: quiz.questions.map(
            (q): Question => ({
                ...q
            })
        ),
        open: false,
        id: quiz.questions.length
    })
);

export const Quizzer = () => {
    const [quizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState(false);
    const showModal = () => setShowAddModal(true);
    const closeModal = () => setShowAddModal(false);

    return (
        <div className="quizzer">
            <QuizList quizzes={quizzes} showModal={showModal}></QuizList>
            <AddQuizModal
                show={showAddModal}
                handleClose={closeModal}
            ></AddQuizModal>
            <img src={require("./IMG_6957.jpg")} />
            <img src={require("./IMG_6958.jpg")} />
            <div>
                <h2>Tasks Completed:</h2>
                <ul className="completedTasks">
                    <li>Application is sketched.</li>
                    <li>Quizzes are visible (once names are clicked)</li>
                    <li>Quizzes have questions.</li>
                    <li>
                        Two types of questions (I just cant get the options to
                        show, probably no points).
                    </li>
                    <li>
                        User can see how many points they have earned (always 0)
                    </li>
                </ul>
            </div>
        </div>
    );
};
