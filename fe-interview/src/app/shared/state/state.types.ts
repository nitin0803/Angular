import { Movie } from "../client/movie.model";

export interface VisitedMovies {
    visitedMovies: VisitedMovie[]
}

export interface VisitedMovie {
    movie: Movie,
    visitedTime: Date;
}

export interface MovieState {
    allMovies: Movie[],
    filteredMovies: Movie[],
    visitedMovie: VisitedMovie | undefined,
    visitedMovies: VisitedMovie[];
    loadMoviesErrorMessage: string | null,
    loadVisitedMoviesErrorMesssage: string| null,
}

export const initialState: MovieState = {
    allMovies: [],
    filteredMovies: [],
    visitedMovie: undefined,
    visitedMovies: [],
    loadMoviesErrorMessage: null,
    loadVisitedMoviesErrorMesssage: null,
}