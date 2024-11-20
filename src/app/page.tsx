import { getMovies } from '@/api/queries';
import Results from '@/components/Results';
import React from 'react';

type HomeProps = {
  searchParams: {
    genre?: string;
  };
};

export default async function Home({ searchParams }: Readonly<HomeProps>) {
  const genre = searchParams.genre ?? 'popular';

  const movieList = await getMovies({ genre });
  const results = movieList.results;
  console.log('your movie list', movieList);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
