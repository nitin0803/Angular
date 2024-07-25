import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
import { selectErrorMessage, selectTop10Movies } from "src/app/shared/state/state.selectors";
import { Movie } from "src/app/shared";
import { stateActions } from "src/app/shared/state/state.actions";
import { AppState } from "src/app/shared/state/app.state";
import { getMovieUrl } from "src/app/shared/utils";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

	viewModel$ = this.store.select(selectTop10Movies);
	errorMessage$ = this.store.select(selectErrorMessage);

	constructor(private store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.store.dispatch(stateActions.loadMovies({ searchTerm: '', genres: [] }));
	}

	getMovieUrl(movie: Movie) {
		return getMovieUrl(movie.slug);
	}
}
