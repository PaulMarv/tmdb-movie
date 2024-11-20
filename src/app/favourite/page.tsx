'use client';

import { MovieResult } from '@/constants/dataTypes';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState<MovieResult[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-center">You have no favorite movies yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <Card key={movie.id} result={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
