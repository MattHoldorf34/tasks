import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, newType] = useState<QuestionType>("short_answer_question");
    function change(): void {
        if (type === "short_answer_question")
            newType("multiple_choice_question");
        else newType("short_answer_question");
    }

    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {type === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                "Multiple Choice"
            )}
        </div>
    );
}
