import { Component, Injector } from "@angular/core";
import { baseLogger } from "../Utility/CustomerApp.Logger";

@Component({
    templateUrl: './CustomerApp.HomeView.html'
  })
export class HomeComponent {
  logObj: baseLogger;
  
  constructor(_injector: Injector) {
    this.logObj = _injector.get(baseLogger);
    this.logObj.Log(); 
  }
}