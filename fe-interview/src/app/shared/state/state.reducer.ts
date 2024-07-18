import { Action, createReducer, on } from "@ngrx/store";
import { MovieState, initialState } from "./state.types";
import { stateActions } from "./state.actions";


const internalReducer = createReducer(
    initialState,
    on(stateActions.loadAllMoviesSuccess, (state, action) => {
        return {
            ...state,
            movies: action.allMovies,
        };
    }),
    on(stateActions.loadAllMoviesFailed, (state) => {
        return {
            ...state,
            movies:[],
            errorMessage: "Can not load movies data! Sorry,Please Try Again!"
        }
    })
    );

export function moviesReducer(state: MovieState | undefined, action: Action) {
    return internalReducer(state, action);
}