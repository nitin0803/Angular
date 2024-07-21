import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { stateActions } from "./state.actions";
import { MovieMockClient } from "../client/movie-mock.client";
import { map, exhaustMap, catchError, of } from "rxjs";

@Injectable()
export class StateEffects {
    constructor(private actions$: Actions, private movieService: MovieMockClient) {
    }

    loadAllMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(stateActions.loadAllMovies, stateActions.loadTop10Movies),
            exhaustMap(() => {
                return this.movieService.getAllMovies()
                    .pipe(
                        map((data) => stateActions.loadAllMoviesSuccess({ allMovies: data })),
                        catchError(() => of(stateActions.loadAllMoviesFailed()))
                    );
            })
        );
    });

    // visitMovie$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(stateActions.visitMovie),
    //         exhaustMap(action => {
    //             return this.movieService.saveLastVisitedMovie(action.visitedMovie)
    //             .pipe(
    //                 map((visitedMovies) => stateActions.visitMovieSuccess({ visitedMovies }))
    //             );
    //         })
    //     );
    // })
}