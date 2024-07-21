import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./state.types";

const getMovieState = createFeatureSelector<MovieState>('movieState');

export const selectAllMovies = createSelector(getMovieState, (state) => {
    return state.allMovies;
});

export const selectFilteredMovies = createSelector(getMovieState, (state) => {
    return state.filteredMovies;
});

export const selectTop10Movies = createSelector(
    selectAllMovies,
    (movies) => movies.slice().sort((a, b) => b.popularity > a.popularity ? 1: -1).slice(0,10)
);

export const selectMovie = createSelector(
    getMovieState,
    (state) => state.visitedMovie
);

export const selectLastVisitedMovies = createSelector(
    getMovieState,
    (state) => state.visitedMovies.slice().sort((a, b) => b.visitedTime > a.visitedTime ? 1 : -1).slice(0, 5)
);

export const selectErrorMessage = createSelector(
    getMovieState,
    (state) => {
        return state.errorMessage
    }
)