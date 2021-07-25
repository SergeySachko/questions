import { KeyValue } from "@angular/common";
import { QuestionType } from "../enums/question-type.enum";
import { Answer } from "./answer.model";

export interface Question {
    id: number,
    text: string,
    created: Date,
    replied: Date,
    type: QuestionType
}
export interface SingleQuestion extends Question {
    answers: Answer[],
    reply: number
}
export interface MultiQuestion extends Question {
    answers: Answer[],
    reply: number[]
}
export interface OpenQuestion extends Question {
    asnwer: string;
    reply: string
}