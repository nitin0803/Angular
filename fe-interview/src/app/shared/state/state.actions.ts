import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Movie } from "../client/movie.model";
import { VisitedMovie } from "./state.types";

export const stateActions = createActionGroup({
    source: 'Movies Mini Application',
    events:
    {
        loadAllMovies: emptyProps(),
        loadAllMoviesSuccess: props<{ allMovies: Movie[] }>(),
        loadAllMoviesFailed: emptyProps(),
        loadTop10Movies: emptyProps(),
        loadTop10MoviesSuccess: props<{ topMovies: Movie[] }>(),
        filterMovies: props<{ searchTerm: string, genres: string[] }>(),
        visitMovie: props<{ visitedMovie: VisitedMovie }>(),
        visitMovieSuccess: props<{ visitedMovies: VisitedMovie[] }>(),
    },
});