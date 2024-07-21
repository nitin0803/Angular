import { Movie } from "../client/movie.model";


export interface VisitedMovie {
    title: string;
    slug: string;
    url: string;
    visitedTime: Date;
}

export interface MovieState {
    filteredMovies: Movie[],
    allMovies: Movie[],
    visitedMovies: VisitedMovie[];
    errorMessage: string | null,
}

export const initialState: MovieState = {
    filteredMovies: [],
    allMovies: [],
    visitedMovies: [],
    errorMessage: null,
}