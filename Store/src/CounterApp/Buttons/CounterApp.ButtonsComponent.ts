import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrementAction, incrementAction, resetAction } from "../State/CounterApp.Actions";
import { ICounterState } from "../State/CounterApp.State";

@Component({
    selector: 'counter-buttons',
    templateUrl: './CounterApp.ButtonsView.html'
})
export class ButtonsComponent{

    constructor(private store: Store<{data : ICounterState}>) {
        
    }

    Increment() {
        this.store.dispatch(incrementAction());
    }

    Decrement() {
        this.store.dispatch(decrementAction());
    }

    Reset(){
        this.store.dispatch(resetAction());
    }
}