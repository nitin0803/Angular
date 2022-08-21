import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { baseLogger, ConsoleLogger, DbLogger, FileLogger } from '../Utility/CustomerApp.Logger';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterComponent } from './CustomerApp.MasterComponent';

@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [
    { provide: baseLogger, useClass: DbLogger },
  ],
  bootstrap: [MasterComponent]
})
export class CustomerAppMainModule { }
