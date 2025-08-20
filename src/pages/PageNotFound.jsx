import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-10">404 - Page Not Found</h1>
      <Link
        to="/"
        className="w-64 text-center text-lg text-white bg-blue-600 rounded-lg px-5 py-3 font-semibold shadow-lg
                   hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        Back To Home
      </Link>
    </main>
  );
};
