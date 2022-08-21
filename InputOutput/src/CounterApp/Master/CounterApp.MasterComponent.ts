import { Component } from "@angular/core";

@Component({
    selector: 'MyApp-root',
    templateUrl: './CounterApp.MasterView.html'
})
export class MasterComponent{
    counterValue: number =0;
    
    SetValue(changedValue: number){
        this.counterValue = changedValue;
    }
}