import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./state.types";

const getMovieState = createFeatureSelector<MovieState>('movieState');

export const selectAllMovies = createSelector(getMovieState, (state) => {
    return state.movies;
});

export const selectTop10Movies = createSelector(
    selectAllMovies,
    (movies) => {
        console.log('selectTop10Movies = ', movies.length);
        return movies.slice().sort((a, b) => b.popularity > a.popularity ? 1: -1).slice(0,10)
    }
);

export const selectMovie = createSelector(
    selectAllMovies,
    (movies) => {
        console.log('param = ', movies.length);
        return movies;
    }
);

export const selectErrorMessage = createSelector(
    getMovieState,
    (state) => {
        return state.errorMessage
    }
)