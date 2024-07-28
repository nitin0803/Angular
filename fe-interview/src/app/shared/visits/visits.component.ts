import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitedMovie } from '../state/state.types';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectLastVisitedMovies, selectLoadVisitedMoviesErrorMesssage } from '../state/state.selectors';
import { getMovieUrl } from '../utils';
import { stateActions } from '../state/state.actions';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsComponent implements OnInit {
  viewModel$ = this.store.select(selectLastVisitedMovies);
  errorMessage$ = this.store.select(selectLoadVisitedMoviesErrorMesssage);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(stateActions.getVisitedMovies());
  }

  getMovieUrl(visitedMovie: VisitedMovie) {
    return getMovieUrl(visitedMovie.movie.slug);
  }
}
