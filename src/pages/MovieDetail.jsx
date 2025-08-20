import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Backup from "../assets/images/backup.png";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useTitle(movie.title);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b71a3dc14bc70ac06be4086ca7ed4a72`
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="flex flex-wrap justify-center gap-8 p-6 text-gray-900 dark:text-white">
        {/* Movie Poster */}
        <div className="max-w-sm">
          <img src={image} alt={movie.title} className="rounded w-full" />
        </div>

        {/* Movie Details */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            {movie.title}
          </h1>

          <p className="mb-4">{movie.overview}</p>

          {/* Genres */}
        {movie.genres && (<div className="mb-4 flex flex-wrap gap-3">
        {movie.genres.map((genre) => (
       <span
        key={genre.id}
        className="
          px-2 py-1 border rounded-lg text-lg text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
      >
        {genre.name}
      </span>
    ))}
  </div>
)}



          {/* Rating & Reviews */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="ml-2">{movie.vote_average}</span>
            <span className="mx-2">•</span>
            <span>{movie.vote_count} reviews</span>
          </div>

          {/* Extra Info */}
          <p className="mb-2">
            <strong>Runtime:</strong> {movie.runtime} min
          </p>
          <p className="mb-2">
            <strong>Budget:</strong> ${movie.budget?.toLocaleString()}
          </p>
          <p className="mb-2">
            <strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}
          </p>
          <p className="mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="mb-2">
            <strong>IMDB Code:</strong>{" "}
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
export default MovieDetail;
