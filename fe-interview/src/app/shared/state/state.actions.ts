import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Movie } from "../client/movie.model";
import { VisitedMovie } from "./state.types";

export const stateActions = createActionGroup({
    source: 'Movies Mini Application',
    events:
    {
        loadMovies: props<{ searchTerm: string, genres: string[] }>(),
        loadMoviesSuccess: props<{ allMovies: Movie[], searchTerm: string, genres: string[] }>(),
        loadMoviesFailed: emptyProps(),

        loadMovie: props<{ slug: string }>(),
        loadMovieSuccess: props<{ allMovies: Movie[], slug: string }>(),

        saveVisitedMovie: emptyProps(),
        saveVisitedMovieSuccess: emptyProps(),
        saveVisitedMovieFailed: emptyProps(),

        getVisitedMovies: emptyProps(),
        getVisitedMoviesSuccess: props<{ visitedMovies: VisitedMovie[] }>(),
        getVisitedMoviesFailed: emptyProps(),
    },
});