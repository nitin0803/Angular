import { Component, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import { MovieState } from "src/app/shared/state/state.types";
import { selectTop10Movies } from "src/app/shared/state/state.selectors";
import { Movie } from "src/app/shared";
import { stateActions } from "src/app/shared/state/state.actions";
import { AppState } from "src/app/shared/state/app.state";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent{

	viewModel$ = this.store.select(selectTop10Movies);

	constructor(private store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.store.dispatch(stateActions.loadTop10Movies());
	}

	getMovieUrl(movie: Movie) {
		return '/movie?slug=the-shawshank-redemption';
	}
}
