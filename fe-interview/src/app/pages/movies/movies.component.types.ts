import { FormControl } from "@angular/forms";

export interface MoviesForm {
    searchText: FormControl<string>,
    genres: FormControl<string[]>;
}