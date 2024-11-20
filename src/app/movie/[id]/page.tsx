import { getMovie } from '@/api/queries';
import { SingleMovieData } from '@/constants/dataTypes';
import Image from 'next/image';
import Link from 'next/link';

type MoviePageProps = {
    params: {
        id: string;
    };
};

export default async function MoviePage({ params }: Readonly<MoviePageProps>) {


    const movie: SingleMovieData = await getMovie({ movieId: params.id })
    const genreNames = movie.genres.map((genre) => genre.name);
    console.log('your single movie', movie)

    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                <Link href={movie.homepage ?? '#'}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? movie.backdrop_path
                            }`}
                        alt={movie.title || movie.original_title || 'Movie Poster'}
                        width={500}
                        height={300}
                        className="rounded-lg"
                        style={{ maxWidth: '100%', height: '100%' }}
                    />
                </Link>
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">
                        {movie.original_title || movie.title}
                    </h2>
                    <p className="text-lg mb-3">{movie.overview}</p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Date Released:</span>
                        {movie.release_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Rating:</span>
                        {movie.vote_count}
                    </p>
                    <p className='mb-3 flex gap-2'>
                        Genre:
                        {genreNames.map((genre) =>
                            <span key={genre}>· {genre}</span>)
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}
