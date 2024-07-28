import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { VisitedMovie } from "../state/state.types";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class MovieMockClient {

	private readonly baseUrl = 'http://localhost:3000/';
	private readonly moviesDataURL = "assets/movie.mock-data.json";
	private readonly visitedMoviesURL = this.baseUrl + 'visitedMovies';

	constructor(private http: HttpClient) {
	}

	getAllMovies() {
		return this.http.get<Movie[]>(this.moviesDataURL);
	}

	saveVisitedMovie(lastVisitedMovie: VisitedMovie | undefined) {
		if (lastVisitedMovie === undefined) {
			return;
		}
		const headers = { 'Content-Type': 'application/json' };
		const body = JSON.stringify(lastVisitedMovie);

		return this.http.post<VisitedMovie[]>(this.visitedMoviesURL, body, { 'headers': headers, observe: 'response' });
	}

	getVisitedMovies(): Observable<VisitedMovie[]> {
		return this.http.get<VisitedMovie[]>(this.visitedMoviesURL)
			.pipe(
				map((visitedMovies) =>
					visitedMovies.map(visitedMovie => {
						return {
							movie: visitedMovie.movie,
							visitedTime: visitedMovie.visitedTime
						}
					})
				))
	}
}
