import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.state';
import { stateActions } from 'src/app/shared/state/state.actions';
import { selectMovie } from 'src/app/shared/state/state.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit {
  viewModel$ = this.store.select(selectMovie);

  constructor(private store: Store<AppState>, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.router.snapshot.paramMap.get('slug');
    if (slug) {
      this.store.dispatch(stateActions.loadMovie({ slug }));
    }
  }
}
