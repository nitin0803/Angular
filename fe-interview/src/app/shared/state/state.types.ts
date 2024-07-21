import { Movie } from "../client/movie.model";


export interface VisitedMovie {
    movie: Movie,
    visitedTime: Date;
}

export interface MovieState {
    allMovies: Movie[],
    filteredMovies: Movie[],
    visitedMovie: Movie | undefined,
    visitedMovies: VisitedMovie[];
    errorMessage: string | null,
}

export const initialState: MovieState = {
    allMovies: [],
    filteredMovies: [],
    visitedMovie: undefined,
    visitedMovies: [],
    errorMessage: null,
}