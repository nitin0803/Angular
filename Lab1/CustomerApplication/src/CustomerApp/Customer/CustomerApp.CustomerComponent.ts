import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseLogger } from '../Utility/CustomerApp.Logger';
import { CustomerModel } from './CustomerApp.CustomerModel';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  customerModel: CustomerModel = new CustomerModel();
  customerModels: Array<CustomerModel> = new Array<CustomerModel>();
  logObj: baseLogger;
  columns = [
    {'Name': 'CustomerCode'},
    {'Name': 'CustomerName'},
    {'Name': 'CustomerAmount'},
  ];

  constructor(_logger: baseLogger, public httpClient: HttpClient) {
   this.logObj = _logger;
   this.logObj.Log();
  }

  AddCustomer() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }

  SelectCustomer(_selectedRow: CustomerModel){
    this.customerModel = _selectedRow;
    _selectedRow = new CustomerModel();
  }

  SendToServer() {
    let customerDto = new CustomerModelDto();
    customerDto.code = this.customerModel.CustomerCode;
    customerDto.name = this.customerModel.CustomerName;
    customerDto.amount = this.customerModel.CustomerAmount;

    this.httpClient.post('http://localhost:3000/customers',
    customerDto)
    .subscribe(res => this.OnSuccess(res),
            res2 => this.OnError(res2))
  }

  OnSuccess(res: any): void {
    console.log('added to json successfully', res);
  }

  OnError(res: any): void {
    console.log('http call failed with error', res);
  }

  hasError(controlName: string,
                validatorType: string) : boolean {
                  return this.customerModel.customerFormGroup
                  .controls[controlName]
                  .hasError(validatorType);
                }
}

export class CustomerModelDto {
  code: string = "";
  name: string = "";
  amount: number = 0;
}
