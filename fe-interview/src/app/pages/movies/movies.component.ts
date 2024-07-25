import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs';
import { Movie } from 'src/app/shared';
import { stateActions } from 'src/app/shared/state/state.actions';
import { selectErrorMessage, selectFilteredMovies, selectMovieState } from 'src/app/shared/state/state.selectors';
import { MovieState } from 'src/app/shared/state/state.types';
import { MoviesForm } from './movies.component.types';
import { MatOption, MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { getMovieUrl } from 'src/app/shared/utils';

@Component({
	templateUrl: './movies.component.html',
	styleUrl: './movies.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
	movies$ = this.store.select(selectFilteredMovies);
	errorMessage$ = this.store.select(selectErrorMessage);

	readonly form: FormGroup<MoviesForm>;
	genresList: string[];
	@ViewChild('genresDropDown') genresDropDown: MatSelect | undefined;

	allSelected = false;

	constructor(readonly formBuilder: FormBuilder,
		private store: Store<{ movieStae: MovieState }>,
		private router: Router,
		private route: ActivatedRoute,
		private location: Location) {
		this.genresList = [];
		this.form = new FormGroup<MoviesForm>({
			searchText: formBuilder.nonNullable.control(''),
			genres: this.formBuilder.nonNullable.control([])
		});
	}

	ngOnInit(): void {
		this.fillGenresList();
		this.filterMoviesByQueryParams();
		this.detectFormValueChanges();
	}

	get orderedGenres() {
		return this.genresList.sort((a, b) => a.localeCompare(b))
	}

	getMovieUrl(movie: Movie) {
		return getMovieUrl(movie.slug);
	}

	fillGenresList() {
		this.store.select(selectFilteredMovies)
			.subscribe(fms => {
				this.genresList = [];
				fms.forEach(fm => {
					fm.genres.forEach(g => {
						if (!this.genresList.includes(g)) {
							this.genresList.push(g);
						}
					});
				});
			});
	}

	toggleAllSelection() {
		this.allSelected = !this.allSelected;  // to control select-unselect

		if (this.allSelected) {
			this.genresDropDown!.options.forEach((item: MatOption) => item.select());
		} else {
			this.genresDropDown!.options.forEach((item: MatOption) => { item.deselect() });
		}
	}

	filterMoviesByQueryParams() {
		const searchText = this.route.snapshot.queryParamMap.get('searchTerm') ?? '';
		const genres = this.route.snapshot.queryParamMap.get('genres')?.split(',') ?? [];

		this.form.patchValue({
			searchText,
			genres
		})

		this.dispatchFilterAction(searchText, genres);
	}

	detectFormValueChanges() {
		this.form.controls.searchText.valueChanges.pipe(
			map(value => value?.trim() ?? ''),
			distinctUntilChanged(),
			debounceTime(500),
			map(searchTerm => searchTerm)
		).subscribe(searchTerm => {
			this.dispatchFilterAction(searchTerm, this.form.controls.genres.value);
			this.updateRouteParameters();
		});

		this.form.controls.genres.valueChanges
			.subscribe(genres => {
				this.dispatchFilterAction(this.form.controls.searchText.value, genres);
				this.updateRouteParameters();
			});
	}

	dispatchFilterAction(searchTerm: string, genres: string[]) {
		this.store.dispatch(stateActions.loadMovies({ searchTerm, genres }));
	}

	updateRouteParameters() {
		const params = {
			searchTerm: this.form.controls.searchText.value?.trim() ?? '',
			genres: this.form.controls.genres.value.filter(v => !!v).join(',')
		}

		const urlATree = this.router.createUrlTree(['/movies'], {
			relativeTo: this.route,
			queryParams: params,
			queryParamsHandling: 'merge'
		})

		this.location.go(urlATree.toString())
	}
}
