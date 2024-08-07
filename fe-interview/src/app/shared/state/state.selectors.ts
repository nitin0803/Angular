import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./state.types";

export const selectMovieState = createFeatureSelector<MovieState>('movieState');

export const selectAllMovies = createSelector(selectMovieState, (state) => {
    return state.allMovies;
});

export const selectFilteredMovies = createSelector(selectMovieState, (state) => {
    return state.filteredMovies;
});

export const selectLoadMoviesErrorMessage = createSelector(selectMovieState, (state) => {
    return state.loadMoviesErrorMessage;
});

export const selectTop10Movies = createSelector(
    selectAllMovies,
    (movies) => movies.slice().sort((a, b) => b.popularity > a.popularity ? 1 : -1).slice(0, 10)
);

export const selectVisitedMovie = createSelector(
    selectMovieState,
    (state) => state.visitedMovie
);

export const selectLastVisitedMovies = createSelector(
    selectMovieState,
    (state) => state.visitedMovies.slice().sort((a, b) => b.visitedTime > a.visitedTime ? 1 : -1).slice(0, 5)
);

export const selectLoadVisitedMoviesErrorMesssage = createSelector(selectMovieState, (state) => {
    return state.loadVisitedMoviesErrorMesssage;
});