import { Movie } from "../client/movie.model";


export interface MovieState {
    movies: Movie[],
    errorMessage: string|null,
}
export const initialState: MovieState = {
    movies: [],
    errorMessage: null,
}