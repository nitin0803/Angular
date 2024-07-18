import { moviesReducer } from "./state.reducer";
import { MovieState } from "./state.types";

export interface AppState {
    movieState: MovieState
}

export const appReducer = {
    movieState: moviesReducer
}