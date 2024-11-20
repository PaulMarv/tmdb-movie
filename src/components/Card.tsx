'use client';

import { MovieResult } from '@/constants/dataTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiThumbsUp, FiHeart } from 'react-icons/fi';

type CardProps = {
    result: MovieResult;
};

export default function Card({ result }: Readonly<CardProps>) {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const [favorites, setFavorites] = useState<MovieResult[]>([]);


    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
        setFavorites(savedFavorites);
    }, []);


    useEffect(() => {
        const isAlreadyFavorite = favorites.some((movie: MovieResult) => movie.id === result.id);
        setIsFavorite(isAlreadyFavorite);
    }, [favorites, result.id]);

    const toggleFavorite = () => {
        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = favorites.filter((movie: MovieResult) => movie.id !== result.id);
        } else {
            updatedFavorites = [...favorites, result];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
            <div className='relative'>
                <Link href={`/movie/${result.id}`}>
                    <Image
                        alt=""
                        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                        width={500}
                        height={300}
                        className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
                    />
                </Link>
                <div className="absolute top-2 right-2 bg-white rounded-full h-5 w-5 flex items-center justify-center">
                    <button onClick={toggleFavorite}>
                        {isFavorite ? (
                            <FiHeart fill='red' className="h-7 text-red-500" />
                        ) : (
                            <FiHeart className="h-7" />
                        )}
                    </button>
                </div>
            </div>
            <div className="p-2">
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <h2 className="text-lg font-bold truncate">{result.title || result.original_title}</h2>
                <p className="flex items-center">
                    {result.release_date}
                    <FiThumbsUp className="h-5 mr-1 ml-3" />
                    {result.vote_count}
                </p>
            </div>
        </div>
    );
}
