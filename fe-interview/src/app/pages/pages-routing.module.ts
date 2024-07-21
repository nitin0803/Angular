import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieComponent } from "./movie/movie.component";

const routes: Routes = [
	{ 
		path: "", component: HomeComponent 
	},
	{
		path: 'movies', component: MoviesComponent
	},
	{
		path: 'movie/:slug', component: MovieComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		// enableTracing: true
	})],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {

}
