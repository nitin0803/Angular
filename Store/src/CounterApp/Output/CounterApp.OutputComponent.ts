import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppState } from "src/app.state";
import { getCounter } from "../State/CounterApp.Selector";
import { ICounterState } from "../State/CounterApp.State";

@Component({
    selector: 'counter-output',
    templateUrl: './CounterApp.OutputView.html'
})
export class OutputComponent{
    outputData$: Observable<number>;

    constructor(private store: Store<IAppState>) {
        this.outputData$ = this.store.select(getCounter)
    }
}