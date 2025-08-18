import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  return (
    <div className="max-w-xs bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700 m-5 hover:shadow-lg hover:scale-110 transition-transform">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={image}
          alt={movie.original_title}
          className="w-full h-80 object-cover
           rounded-t-lg"
          loading="lazy"
        />
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">  
            {movie.original_title}
          </h2>
          <p className="text-sm text-black dark:text-gray-300 mt-2 line-clamp-4">
  {movie.overview || "No description available."}
</p>
</div>
      </Link>
    </div>
  );
};
