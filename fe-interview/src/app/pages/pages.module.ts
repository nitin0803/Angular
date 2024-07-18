import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MoviesComponent } from "./movies/movies.component";
import { ContentComponent } from "./content.component";
import { LetDirective } from "@ngrx/component";
import { MovieComponent } from "./movie/movie.component";

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		LetDirective,
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
