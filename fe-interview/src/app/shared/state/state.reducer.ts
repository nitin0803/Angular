import { Action, createReducer, on } from "@ngrx/store";
import { MovieState, initialState } from "./state.types";
import { stateActions } from "./state.actions";
import { Movie } from "../client/movie.model";


const internalReducer = createReducer(
    initialState,
    on(stateActions.loadAllMoviesSuccess, (state, action) => {
        return {
            ...state,
            allMovies: action.allMovies,
            filteredMovies: action.allMovies,
        };
    }),
    on(stateActions.loadAllMoviesFailed, (state) => {
        return {
            ...state,
            allMovies: [],
            filteredMovies: [],
            errorMessage: "Can not load movies data! Sorry,Please Try Again!"
        }
    }),
    on(stateActions.filterMovies, (state, action) => {
        return {
            ...state,
            filteredMovies: getFilteredMovies(state, action.searchTerm, action.genres)
        }
    }),
    on(stateActions.visitMovie, (state, action) => {
        let visitedMovies = [...state.visitedMovies].filter(m => m.slug !== action.visitedMovie.slug);
        visitedMovies.push(action.visitedMovie);
        return {
            ...state,
            visitedMovies
        }
    }),
);

function getFilteredMovies(state: MovieState, searchTerm: string, genres: string[]) {
    // no filtered movies
    const allMovies = state.allMovies;
    if (searchTerm === '' && genres.length == 0) {
        return allMovies;
    }

    if (searchTerm !== '' && genres.length == 0) {
        return filterMoviesBySearchTerm(allMovies, searchTerm);
    }

    if (searchTerm === '' && genres.length > 0) {
        return filterMoviesByGenres(allMovies, genres);
    }

    // filtered by searchTerm and genres
    return filterMoviesBySearchTermAndGenres(allMovies, searchTerm, genres);
}

function filterMoviesBySearchTerm(allMovies: Movie[], searchTerm: string) {
    return allMovies.filter(movie => movie.slug.includes(searchTerm))
}

function filterMoviesByGenres(allMovies: Movie[], genres: string[]) {
    return allMovies.filter(movie =>
        (movie.genres.filter(mg => genres.includes(mg))).length > 0
    )
}

function filterMoviesBySearchTermAndGenres(allMovies: Movie[], searchTerm: string, genres: string[]) {
    return filterMoviesByGenres(filterMoviesBySearchTerm(allMovies, searchTerm), genres);
}

export function moviesReducer(state: MovieState | undefined, action: Action) {
    return internalReducer(state, action);
}