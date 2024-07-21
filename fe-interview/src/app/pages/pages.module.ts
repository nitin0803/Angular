import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MoviesComponent } from "./movies/movies.component";
import { ContentComponent } from "./content.component";
import { LetDirective } from "@ngrx/component";
import { MovieComponent } from "./movie/movie.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	imports: [
		CommonModule, 
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatSelectModule,
		AppPagesRoutingModule,
		LetDirective,
		ReactiveFormsModule,
	],
	declarations: [
		ContentComponent,
		HomeComponent,
		MoviesComponent,
		MovieComponent,
	],
	exports: [
		ContentComponent,
		HomeComponent,
		MoviesComponent,
		MovieComponent,
	]
})
export class AppPagesModule {

}
