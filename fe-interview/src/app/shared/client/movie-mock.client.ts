import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";

@Injectable({
	providedIn: "root"
})
export class MovieMockClient {

	private readonly dataURL = "assets/movie.mock-data.json";

	constructor(private http: HttpClient
	) {
	}

	getAllMovies() {
		return this.http.get<Movie[]>(this.dataURL);
	}

}
