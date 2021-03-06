import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'answer-dialog',
    templateUrl: 'answer-dialog.component.html',
    styleUrls: ['answer-dialog.component.scss']
})

export class AnswerDialogComponent implements OnInit {


    constructor(
        public dialogRef: MatDialogRef<AnswerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() { }
}