import { getSearchResults } from '@/api/queries';
import Results from '@/components/Results';

type SearchPageProps = {
    params: Promise<{
        searchTerm: string;
    }>;
};

export default async function SearchPage({ params }: Readonly<SearchPageProps>) {
    const {searchTerm} = await params;
    const movieList = await getSearchResults({ searchTerm });
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
