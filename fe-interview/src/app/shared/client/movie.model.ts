export interface Movie {
	id: string;
	title: string;
	popularity: number;
	slug: string;
	runtime: string;
	released: string;
	image: Image;
	genres: string[];
	budget: number;
}

export interface Image {
	url: string;
	title: string;
}