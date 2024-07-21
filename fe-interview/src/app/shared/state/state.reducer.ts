import { Action, createReducer, on } from "@ngrx/store";
import { MovieState, initialState } from "./state.types";
import { stateActions } from "./state.actions";


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

function getFilteredMovies(state: MovieState, searchTerm: string, genres: string[] ) {
    if (searchTerm === '' && genres.length == 0) {
        return state.allMovies;
    }
    if (searchTerm !== '' && genres.length == 0) {
        return state.allMovies.filter(movie => movie.slug.includes(searchTerm))
    }
    if (searchTerm === '' && genres.length > 0) {
        return state.allMovies.filter(movie => {
            movie.genres.forEach(mg => {
                return genres.includes(mg)
            })
        })
    }
   return state.allMovies;
}

export function moviesReducer(state: MovieState | undefined, action: Action) {
    return internalReducer(state, action);
}