import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule, isDevMode } from "@angular/core";
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

@NgModule({ 
	declarations: [
        AppComponent,
		SidebarComponent
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
		providers: [provideHttpClient(withInterceptorsFromDi())],		
		bootstrap: [AppComponent], 
	 })
export class AppModule { }
