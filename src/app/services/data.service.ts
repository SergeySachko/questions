import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Question } from '../models/questions.model';

@Injectable({ providedIn: 'root' })
export class DataService {
    private readonly dataKey = "question_data";
    private _data = new BehaviorSubject<Question[]>([]);
    constructor(
    ) { }

    public get(id:number): Question {
        var result = JSON.parse(localStorage.getItem(this.dataKey)) as Question[];
        if(result && id)
            return result.find(x => x.id == id)
        return null;
    }
    public getAllAsObservable(): Observable<Question[]> {
        var result = JSON.parse(localStorage.getItem(this.dataKey)) as Question[];
        this._data.next(result);
        return this._data.asObservable();
    }
    public save(model: Question): void {
        var data = JSON.parse(localStorage.getItem(this.dataKey)) as Question[];
        if (!data)
            data = [];
        model.id = data.length + 1;
        data.push(model);
        this._data.next(data);
        localStorage.setItem(this.dataKey, JSON.stringify(data));
    }
    public update(model: Question): void {
        var data = JSON.parse(localStorage.getItem(this.dataKey)) as Question[];
        if (!data)
            return;
        var index = data.findIndex(x => x["id"] == model["id"]);
        data[index] = model;
        this._data.next(data);
        localStorage.setItem(this.dataKey, JSON.stringify(data));
    }
    public delete(model: Question): void {
        var data = JSON.parse(localStorage.getItem(this.dataKey)) as Question[];
        if (!data)
            return;
        data.splice(data.indexOf(model), 1);
        this._data.next(data);
        localStorage.setItem(this.dataKey, JSON.stringify(data));
    }

}