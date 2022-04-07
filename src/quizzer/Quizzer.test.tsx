import React from "react";
import { render, screen } from "@testing-library/react";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { Quizzer } from "./Quizzer";
import myquizzes from "./quizzes.json";

const QUIZZES = myquizzes.map(
    (quiz): Quiz => ({
        ...quiz,
        questions: quiz.questions.map(
            (q): Question => ({
                ...q
            })
        ),
        open: false,
        id: 0
    })
);

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });

    test("Users can see a list of quizzes, including the quizzes title, description, and how many questions it has", () => {
        for (let i = 0; i < QUIZZES.length; i++) {
            expect(screen.queryByText(QUIZZES[i].title)).toBeInTheDocument();
            expect(
                screen.queryByText(QUIZZES[i].questions.length + " question", {
                    exact: false
                })
            ).toBeInTheDocument();
            expect(
                screen.queryByText(QUIZZES[i].description, { exact: false })
            ).toBeInTheDocument();
        }
    });
});
