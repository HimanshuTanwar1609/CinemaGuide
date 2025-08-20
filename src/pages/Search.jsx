import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../component";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Top results for ${queryTerm}`);

  return (
    <main>
      <section className="py-6 text-center">
        {movies.length === 0 && (
          <p className="text-xl text-gray-700 dark:text-white">
            No result found for '{queryTerm}'
          </p>
        )}
      </section>

      <section className="max-w-7xl mx-auto py-6">
        <div className="flex justify-start flex-wrap gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="flex justify-between mt-8 pl-4">
          <Link
            to="/"
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Search;
