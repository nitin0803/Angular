import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitedMovie } from '../state/state.types';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectLastVisitedMovies } from '../state/state.selectors';
import { getMovieUrl } from '../utils';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsComponent implements OnInit {
  viewModel$: Observable<VisitedMovie[]> | undefined;

  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.viewModel$ = this.store.select(selectLastVisitedMovies);
  }


  getMovieUrl(movie: VisitedMovie) {
    return getMovieUrl(movie.slug);
  }
}
