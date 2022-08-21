import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { appReducer } from "./app.reducer";
import { AppRoutingModule } from "./app.routing.module";
import { MasterModule } from "./CounterApp/Master/CounterApp.MasterModule";
import { HeaderComponent } from "./Header/Header.Component";
import { HomeComponent } from "./Home/Home.Component";

@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        MasterModule,
        HttpClientModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({})
    ],
    bootstrap:[AppComponent]
})
export class AppModule{

}`  `