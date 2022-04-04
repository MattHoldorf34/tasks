import { Question } from "./question";

export interface Quiz {
    id: number;
    title: string;
    description: string;
    questions: Question[];
    open: boolean;
    points: number;
}
