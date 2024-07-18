export interface Movie {
	id: string;
	title: string;
	popularity: number;
	slug: string;
	runtime: number;
	released: string;
	image: image;
	genres: string[];
	budget: number;
}

export interface image {
	url: string;
	title: string;
}