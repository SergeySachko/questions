import { PipeTransform, Pipe } from "@angular/core";
import { QuestionType } from "../enums/question-type.enum";

@Pipe({ name: 'displayEnum' })
export class DisplayEnumPipe implements PipeTransform {
    transform(value, args: string[]): any {      
        return QuestionType[+value];
    }
 
}