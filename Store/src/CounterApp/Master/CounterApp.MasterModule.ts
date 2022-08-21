import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { ButtonsComponent } from "../Buttons/CounterApp.ButtonsComponent";
import { CustomCounterInputComponent } from "../custom-counter-input/custom-counter-input.component";
import { OutputComponent } from "../Output/CounterApp.OutputComponent";
import { counterReducer } from "../State/CounterApp.Reducer";
import { COUNTER_STORE_STATE } from "../State/CounterApp.Selector";
import { MasterComponent } from "./CounterApp.MasterComponent";

const routes: Routes = [  
  {
    path: '',
    component: MasterComponent
  }
]

@NgModule({
    declarations:[
        MasterComponent,
        OutputComponent,
        ButtonsComponent,
        CustomCounterInputComponent
    ],
    imports: [
      FormsModule,
      CommonModule,
      RouterModule.forChild(routes),
      StoreModule.forFeature(COUNTER_STORE_STATE, counterReducer)
    ],
    providers:[],
    bootstrap:[MasterComponent]
})
export class MasterModule{}