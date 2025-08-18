import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="h-24 p-2 bg-black shadow dark:bg-gray-1000 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-100 dark:text-gray-400">
        @ 2025{" "}
        <Link to="/" className="hover:underline font-medium text-gray-30">
          Cinema Guide{" "}
        </Link>
      Copyrights reserved.
      </span>

      <ul className="flex mt-2 md:mt-0 space-x-6 text-sm text-gray-100 dark:text-gray-1000">
        <li>
          <a href="#" className="hover:underline cursor-pointer">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline cursor-pointer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline cursor-pointer">
            Twitter
          </a>
          </li>
      </ul>
    </footer>
  );
};
