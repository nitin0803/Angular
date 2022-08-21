import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { baseLogger, FileLogger } from '../Utility/CustomerApp.Logger';
import { CustomerComponent } from './CustomerApp.CustomerComponent';


@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [{
    provide: baseLogger,
    useClass: FileLogger
  }],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
