import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
import { selectTop10Movies } from "src/app/shared/state/state.selectors";
import { Movie } from "src/app/shared";
import { stateActions } from "src/app/shared/state/state.actions";
import { AppState } from "src/app/shared/state/app.state";
import { getMovieUrl } from "src/app/shared/utils";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

	viewModel$ = this.store.select(selectTop10Movies);

	constructor(private store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.store.dispatch(stateActions.loadMovies({ searchTerm: '', genres: [] }));
	}

	getMovieUrl(movie: Movie) {
		return getMovieUrl(movie.slug);
	}
}
