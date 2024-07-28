import { Action, createReducer, on } from "@ngrx/store";
import { MovieState, VisitedMovie, initialState } from "./state.types";
import { stateActions } from "./state.actions";
import { Movie } from "../client/movie.model";


const internalReducer = createReducer(
    initialState,
    on(stateActions.loadMoviesSuccess, (state, action) => {
        return {
            ...state,
            allMovies: action.allMovies,
            filteredMovies: getFilteredMovies(action.allMovies, action.searchTerm, action.genres)
        };
    }),
    on(stateActions.loadMoviesFailed, (state) => {
        return {
            ...state,
            allMovies: [],
            filteredMovies: [],
            loadMoviesErrorMessage: "Can not load movies data! Sorry,Please Try Again!"
        }
    }),
    on(stateActions.loadMovieSuccess, (state, action) => {
        const movieBySlug = action.allMovies.find(am => am.slug === action.slug) ?? undefined;
        let visitedMovies = [...state.visitedMovies];
        let visitedMovie: VisitedMovie | undefined;
        if (movieBySlug !== undefined) {
            visitedMovie = {
                movie: movieBySlug,
                visitedTime: new Date()
            }
        }
        return {
            ...state,
            allMovies: action.allMovies,
            visitedMovie,
            visitedMovies,
        }
    }),
    on(stateActions.getVisitedMoviesSuccess, (state, action) => {
        return {
            ...state,
            loadVisitedMoviesErrorMesssage: null,
            visitedMovies: action.visitedMovies
        }
    }),
    on(stateActions.getVisitedMoviesFailed, (state) => {
        return {
            ...state,
            loadVisitedMoviesErrorMesssage: "Sorry, Can not load last visited movies! "
        }
    })
);

function getFilteredMovies(allMovies: Movie[], searchTerm: string, genres: string[]) {
    // no filtered movies
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