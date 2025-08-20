import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Backup from "../assets/images/backup.png";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [usingBackup, setUsingBackup] = useState(false); // track if backup is used

  useTitle(movie?.title || "Loading...");

  // We only want to show movie details once real image is loaded
  // So we treat backup as no-image and keep loading until real image loads.

  // Compose image URL if poster_path exists
  const image = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : null;

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(null);      // reset loading state
      setImageLoaded(false);
      setUsingBackup(false);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b71a3dc14bc70ac06be4086ca7ed4a72`
      );
      const data = await res.json();
      setMovie(data);
      // If no poster_path, mark that we will use backup immediately
      if (!data.poster_path) {
        setUsingBackup(true);
        setImageLoaded(true);  // Consider backup image as loaded immediately
      }
    };
    fetchMovie();
  }, [id]);

  // If still loading movie data or waiting for real image (when not backup)
  if (!movie || (!imageLoaded && !usingBackup)) {
    return (
      <main className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="text-gray-900 dark:text-white text-xl">Loading...</div>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="flex flex-wrap justify-center gap-8 p-6 text-gray-900 dark:text-white">
        {/* Movie Poster */}
        <div className="max-w-sm">
          {image ? (
            <img
              src={image}
              alt={movie.title}
              className="rounded w-full"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <img
              src={Backup}
              alt="backup poster"
              className="rounded w-full"
              loading="lazy"
            />
          )}
        </div>

        {/* Movie Details */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            {movie.title}
          </h1>

          <p className="mb-4">{movie.overview}</p>

          {/* Genres */}
          {movie.genres && (
            <div className="mb-4 flex flex-wrap gap-3">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-2 py-1 border rounded-lg text-lg text-gray-900"
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
