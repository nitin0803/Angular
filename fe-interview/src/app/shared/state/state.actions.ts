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
        visitMovie: props<{ visitedMovie: VisitedMovie }>(),
        visitMovieSuccess: props<{ visitedMovies: VisitedMovie[] }>(),
    },
});