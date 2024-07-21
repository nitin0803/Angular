import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from "./movie.model";
import { map, of } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class MovieMockClient {

	private readonly moviesDataURL = "assets/movie.mock-data.json";
	private readonly visitedMoviesURL = "assets/visited.movies.data.json";
	headers: HttpHeaders;

	constructor(private http: HttpClient) {

		this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	}

	getAllMovies() {
		return this.http.get<Movie[]>(this.moviesDataURL);
	}

	// saveLastVisitedMovie(lastVisitedMovie: VisitedMovie) {
	// 	let visitedMovies: VisitedMovie[] = [];
	// 	this.http.get<VisitedMovie[]>(this.visitedMoviesURL)
	// 		.pipe(map((currentVisitedMovies) => {
	// 			currentVisitedMovies = currentVisitedMovies === null ? [] : currentVisitedMovies;
	// 			currentVisitedMovies.push(lastVisitedMovie);
	// 			this.http.post<VisitedMovie[]>(this.visitedMoviesURL, currentVisitedMovies);
	// 			this.http.get<VisitedMovie[]>(this.visitedMoviesURL).subscribe(
	// 				data => {
	// 					visitedMovies = data;
	// 				}
	// 			)
	// 			return currentVisitedMovies;
	// 		})).subscribe((data) => {
	// 			visitedMovies = data;
	// 		});
	// 	return of(visitedMovies);
	// }

}
