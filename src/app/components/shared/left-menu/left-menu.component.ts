import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'left-menu',
    templateUrl: 'left-menu.component.html',
    styleUrls:['left-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LeftMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}