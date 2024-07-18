import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Movie } from "../client/movie.model";

export const stateActions = createActionGroup({
    source: 'Movies Mini Application',
    events:
    {
        loadAllMovies: emptyProps(),
        loadAllMoviesFailed: emptyProps(),
        loadAllMoviesSuccess: props<{allMovies: Movie[]}>(),
        loadTop10Movies: emptyProps(),
        loadTop10MoviesSuccess: props<{topMovies: Movie[]}>(),
    },
});