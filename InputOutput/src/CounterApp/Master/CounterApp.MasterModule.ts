import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonsComponent } from "../Buttons/CounterApp.ButtonsComponent";
import { OutputComponent } from "../Output/CounterApp.OutputComponent";
import { MasterComponent } from "./CounterApp.MasterComponent";

@NgModule({
    declarations:[
        MasterComponent,
        OutputComponent,
        ButtonsComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers:[],
    bootstrap:[MasterComponent]
})
export class MasterModule{}