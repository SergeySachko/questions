import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { QuestionType } from 'src/app/enums/question-type.enum';
import { Answer } from 'src/app/models/answer.model';
import { MultiQuestion, OpenQuestion, Question, SingleQuestion } from 'src/app/models/questions.model';
import { DataService } from 'src/app/services/data.service';
import { BaseComponent } from '../../common/base-component';
import { AnswerDialogComponent } from '../../dialogs/answer/answer-dialog.component';

@Component({
    selector: 'question-edit',
    templateUrl: 'question-edit.component.html',
    styleUrls: ['question-edit.component.scss']
})

export class QuestionEditComponent extends BaseComponent implements OnInit {

    public model: Question = {} as Question;
    public questionType = QuestionType;
    public answers: Answer[] = [];
    public errors = {
        text: '',
        answers: '',
        type: ''
    }

    constructor(
        private dialog: MatDialog,
        private dataService: DataService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
    }
    @HostBinding('attr.style') style = 'min-width: 600px;';

    public openAnswerDialog(model: Answer): void {
        const dialogRef = this.dialog.open(AnswerDialogComponent, {
            width: '250px',
            data: { answer: model ? model.value : '' }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (!result)
                return;
            if (!model) {
                model = {} as Answer;
                model.id = this.answers.length + 1;
                model.value = result;
                this.answers.push(model);
            } else {
                let item = this.answers.find(x => x.id == model.id);
                if (item)
                    item.value = result;
            }

        });
    }
    public deleteAnswer(index) {
        if (this.answers.length == 0 && index >= 0)
            return;
        this.answers.splice(index, 1);
    }

    public add() {
        if (!this.isValid())
            return;
        this.dataService.save(this.getQuestionObject());
        this.router.navigateByUrl('/management');
    }
    public update() {
        if (!this.isValid())
            return;
        this.dataService.update(this.model);
        this.router.navigateByUrl('/management');
    }
    public clear() {
        this.errors.text = '';
        this.errors.type = '';
        this.errors.answers = '';
    }
    private isValid() {
        this.errors.text = this.model.text ? '' : 'The question is required';
        this.errors.type = this.model.type ? '' : 'The type text is required';
        this.errors.answers = (this.answers && this.answers.length > 1 && (this.model.type == QuestionType.Single ||  this.model.type == QuestionType.Multi)) ||
            ((!this.answers || this.answers.length <= 1) && this.model.type == QuestionType.Open) ?
            '' :
            'Count of answers should be 2 or more';

        return !this.errors.text && !this.errors.type && !this.errors.answers;
    }
    private getQuestionObject() {
        switch (+this.model.type) {
            case QuestionType.Single:
                return {
                    ...this.model,
                    answers: this.answers,
                    created: new Date()
                } as SingleQuestion;
            case QuestionType.Multi:
                return {
                    ...this.model,
                    answers: this.answers,
                    created: new Date()
                } as MultiQuestion;
            case QuestionType.Open:
                return {
                    ...this.model,
                    created: new Date()
                } as OpenQuestion;
            default:
                return null;
        }
    }
    ngOnInit() {
        this.route.params.pipe(takeUntil(this._destroy$)).subscribe(params => {
            if (params['id']) {
                const data = this.dataService.get(+params['id']);
                if (data) {
                    switch (+data.type) {
                        case QuestionType.Single:
                        case QuestionType.Multi:
                            this.model = { ...data } as Question
                            this.answers = data["answers"]
                        default:
                            this.model = { ...data } as Question;
                    }
                }
            }
        });
    }

}


