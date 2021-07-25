import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export abstract class BaseComponent implements OnDestroy {
    protected _destroy$ = new Subject();
    constructor() { }

    public ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}