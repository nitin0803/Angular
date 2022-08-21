import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'counter-buttons',
    templateUrl: './CounterApp.ButtonsView.html'
})
export class ButtonsComponent{

    @Input("button-input")
    value: any;

    @Output()
    event = new EventEmitter<number>();

    Increment() {
        this.value++;
        this.event.emit(this.value);
    }

    Decrement() {
        this.value--;
        this.event.emit(this.value);
    }

    Reset(){
        this.value = 0;
        this.event.emit(this.value);
    }
}