import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatLatestFrom } from '@ngrx/operators';
import { stateActions } from "./state.actions";
import { MovieMockClient } from "../client/movie-mock.client";
import { map, catchError, of, mergeMap, EMPTY } from "rxjs";
import { selectAllMovies } from "./state.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";

@Injectable()
export class StateEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieMockClient,
        private store: Store<AppState>) {
    }

    loadMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(stateActions.loadMovies),
            concatLatestFrom(() => this.store.select(selectAllMovies)),
            mergeMap(([{ searchTerm, genres }, allMovies]) => {
                return allMovies.length > 0
                    ? of(allMovies)
                        .pipe(map((data) => stateActions.loadMoviesSuccess({ allMovies: data, searchTerm, genres })),
                            catchError(() => EMPTY))
                    :
                    this.movieService.getAllMovies()
                        .pipe(
                            map((data) => stateActions.loadMoviesSuccess({ allMovies: data, searchTerm, genres })),
                            catchError(() => of(stateActions.loadMoviesFailed()))
                        );
            })
        );
    });

    loadMovie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(stateActions.loadMovie),
            concatLatestFrom(() => this.store.select(selectAllMovies)),
            mergeMap(([{ slug }, allMovies]) => {
                return allMovies.length > 0
                    ? of(allMovies)
                        .pipe(map((existingMoviesData) => stateActions.loadMovieSuccess({ allMovies: existingMoviesData, slug })),
                            catchError(() => EMPTY))
                    :
                    this.movieService.getAllMovies()
                        .pipe(
                            map((apiMoviesData) => stateActions.loadMovieSuccess({ allMovies: apiMoviesData, slug })),
                            catchError(() => of(stateActions.loadMoviesFailed()))
                        );
            })
        );
    });
}