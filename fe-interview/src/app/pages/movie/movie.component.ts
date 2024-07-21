import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared';
import { AppState } from 'src/app/shared/state/app.state';
import { stateActions } from 'src/app/shared/state/state.actions';
import { selectAllMovies, selectMovie } from 'src/app/shared/state/state.selectors';
import { VisitedMovie } from 'src/app/shared/state/state.types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit{
  movie: Movie | undefined;

  constructor(private store: Store<AppState>, private router: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.router.snapshot.paramMap.get('slug');
    this.store.select(selectMovie(slug!)).subscribe(movie => {
      if(movie === undefined) {
        return;
      }
      this.movie = movie;
      const visitedMovie: VisitedMovie = {
        title: movie.title,
        slug: movie.slug,
        url: movie.image.url,
        visitedTime: new Date()
      }
      this.store.dispatch(stateActions.visitMovie({ visitedMovie }));
    })
  }
}
