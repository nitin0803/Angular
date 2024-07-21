import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs';
import { Movie } from 'src/app/shared';
import { stateActions } from 'src/app/shared/state/state.actions';
import { selectFilteredMovies } from 'src/app/shared/state/state.selectors';
import { MovieState } from 'src/app/shared/state/state.types';
import { MoviesForm } from './movies.component.types';

@Component({
	templateUrl: './movies.component.html',
	styleUrl: './movies.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
	viewModel$ = this.store.select(selectFilteredMovies);
	readonly form: FormGroup<MoviesForm>;
	genresList: string[];

	constructor(readonly formBuilder: FormBuilder,
		private store: Store<{ movieStae: MovieState }>) {
		this.genresList = [];
		this.form = new FormGroup<MoviesForm>({
			searchText: formBuilder.nonNullable.control(''),
			genres: this.formBuilder.nonNullable.control([])
		});
	}

	ngOnInit(): void {
		this.store.dispatch(stateActions.loadAllMovies());
		this.form.controls.searchText.valueChanges.pipe(
			map(value => value?.trim() ?? ''),
			distinctUntilChanged(),
			debounceTime(500),
			map(searchTerm => searchTerm)
		).subscribe(searchTerm => {
			this.store.dispatch(stateActions.filterMovies({ searchTerm, genres: this.form.controls.genres.value }))
		})

		this.form.controls.genres.valueChanges.subscribe(value => {
			this.store.dispatch(stateActions.filterMovies({
				searchTerm: this.form.controls.searchText.value,
				genres: value
			}))
		})

		this.store.select(selectFilteredMovies).subscribe(fms => {
			this.genresList = [];
			fms.forEach(fm => {
				fm.genres.forEach(g => {
					if (!this.genresList.includes(g)) {
						this.genresList.push(g)
					}
				});
			});
		})

	}

	getMovieUrl(movie: Movie) {
		return `/movie/${movie.slug}`;
	}
}
