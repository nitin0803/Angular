import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/shared';
import { stateActions } from 'src/app/shared/state/state.actions';
import { selectAllMovies } from 'src/app/shared/state/state.selectors';
import { MovieState } from 'src/app/shared/state/state.types';

@Component({
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
  viewModel$ = this.store.select(selectAllMovies);

  constructor(private store: Store<{movieStae: MovieState}>) {}

	ngOnInit(): void {
		this.store.dispatch(stateActions.loadAllMovies());
	}

	getMovieUrl(movie: Movie) {
		return `/movie/${movie.slug}`;
	}
}
