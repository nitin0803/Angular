import { Component, Input } from "@angular/core";

@Component({
    selector: 'counter-output',
    templateUrl: './CounterApp.OutputView.html'
})
export class OutputComponent{
    @Input("output-input")
    outputValue: any;    
}