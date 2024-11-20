import { getSearchResults } from '@/api/queries';
import Results from '@/components/Results';

type SearchPageProps = {
    params: {
        searchTerm: string;
    };
};

export default async function SearchPage({ params }: Readonly<SearchPageProps>) {
    const movieList = await getSearchResults({ params });
    const results = movieList.results;

    return (
        <div>
            {results && results.length === 0 && (
                <h1 className='text-center pt-6'>No results found</h1>
            )}
            {results && results.length > 0 && <Results results={results} />}
        </div>
    );
}
