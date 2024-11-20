import { API_KEY, BASE_URL } from "@/constants/api";
import { GenresResponse, MovieData, SingleMovieData } from "@/constants/dataTypes";

type GetMoviesParams = {
    genre: string;
    page?: number
};
type GetMovieParams = {
    movieId: string;
};
type GetSearchResultsParams = {
    params: {
        searchTerm: string;
    };
    page?: number;
};


export async function getMovies({ genre }: GetMoviesParams): Promise<MovieData> {
    console.log('genre', genre)
    const res = await fetch(
        `${BASE_URL}/3/movie/popular?language=en-US&sort_by=popularity.desc&api_key=${API_KEY}`,
        { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
}


export async function getMovie({ movieId }: GetMovieParams): Promise<SingleMovieData> {
    const res = await fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    if (!res.ok) {
        throw new Error('Failed to fetch single movie data');
    }

    const data: SingleMovieData = await res.json();
    return data;
}


export async function getGenres(): Promise<GenresResponse> {
    const res = await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${process.env.API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to fetch genre');
    }
    const data: GenresResponse = await res.json();
    return data;
}


export async function getSearchResults({
    params,
}: GetSearchResultsParams): Promise<MovieData> {
    const searchTerm = params.searchTerm;

    const res = await fetch(
        `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch search results');
    }

    const data: MovieData = await res.json();
    return data;
}
