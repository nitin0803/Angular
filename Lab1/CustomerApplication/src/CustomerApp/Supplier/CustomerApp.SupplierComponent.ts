import { Component } from "@angular/core";
import { baseLogger } from "../Utility/CustomerApp.Logger";

@Component({
    templateUrl: './CustomerApp.SupplierView.html'
  })
export class SupplierComponent {
  logObj: baseLogger;

  constructor(_logger: baseLogger) {
    this.logObj = _logger;
    this.logObj.Log();    
  }
}