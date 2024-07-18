import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared';
import { AppState } from 'src/app/shared/state/app.state';
import { selectAllMovies, selectMovie } from 'src/app/shared/state/state.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit{

  viewModel$: Observable<Movie[]> | undefined;
  movie: Movie | undefined;
  constructor(private store: Store<AppState>, private router: ActivatedRoute) {}
  ngOnInit(): void {
    const movieSlug = this.router.snapshot.queryParams['slug'];
    console.log('movieSlug = ', movieSlug);
    this.store.select(selectAllMovies).subscribe(movies => {
      this.movie = movies.find(m => m.slug === movieSlug);
    })
  }

}
