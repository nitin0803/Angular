import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule, importProvidersFrom, isDevMode } from "@angular/core";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { LetDirective } from '@ngrx/component';
import { AppComponent } from "./app.component";
import { AppPagesModule } from "./pages/pages.module";
import { moviesReducer } from "./shared/state/state.reducer";
import { StoreModule } from "@ngrx/store";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { EffectsModule } from "@ngrx/effects";
import { StateEffects } from "./shared/state/state.effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from "src/environments/environment";
import { appReducer } from "./shared/state/app.state";
import { VisitsComponent } from "./shared/visits/visits.component";
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({ 
	declarations: [
        AppComponent,
		SidebarComponent,
		VisitsComponent,
    ],
	imports: [
		CommonModule,
        RouterModule,
        BrowserModule,
		LetDirective,
        AppPagesModule,
		EffectsModule.forRoot([StateEffects]),
		StoreModule.forRoot(appReducer),
		StoreRouterConnectingModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		  }),
	], 
	providers: [provideHttpClient(withInterceptorsFromDi()), importProvidersFrom(MatNativeDateModule)],		
		bootstrap: [AppComponent], 
	 })
export class AppModule { }
