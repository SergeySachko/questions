import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from 'src/app/models/questions.model';
import { DataService } from 'src/app/services/data.service';
import { BaseComponent } from '../../common/base-component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
    selector: 'question-managment',
    templateUrl: 'question-managment.component.html',
    styleUrls: ['question-managment.component.scss']
})

export class QuestionManagmentComponent extends BaseComponent implements OnInit, OnDestroy {
    public questions: Question[];
    public dtTrigger: Subject<any> = new Subject<any>();

    constructor(
        private dataService: DataService) {
        super();
    }

    public ngOnInit() {
        this.dataService.getAllAsObservable().pipe(takeUntil(this._destroy$)).subscribe(
            d => this.questions = d.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
        )
    }

    deleteQuestion(question) {
        if (!question)
            return;
        this.dataService.delete(question);
    }

    public ngOnDestroy() {
        this.dtTrigger.unsubscribe();
        super.ngOnDestroy();
    }
}