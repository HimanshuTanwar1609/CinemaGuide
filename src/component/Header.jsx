import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/img_logo.jpg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      navigate(`/search?q=${query}`);
      e.target.reset();
      setMenuOpen(false);
    }
  };

  const activeClass = "text-blue-500 dark:text-white font-semibold";
  const inActiveClass =
    "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white";

  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-2" alt="Logo" />
          <span className="text-xl font-bold dark:text-white">Cinema Guide</span>
        </Link>

        {/* Centered nav links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Popular</NavLink>
            </li>
            <li>
              <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Upcoming</NavLink>
            </li>
          </ul>
        </div>

        {/* Right side: Theme toggle & mobile menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-white text-xl"
            title="Toggle Theme"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-white"
          >
            ☰
          </button>
        </div>

        {/* Search Bar */}
        <div className={`w-full md:w-80 md:flex md:items-center ${menuOpen ? "" : "hidden"} md:block`}>
          <form onSubmit={handleSearch} className="mt-4 md:mt-0 md:ml-6">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="p-2 rounded border w-full md:w-72 dark:bg-gray-700 dark:text-white"
              autoComplete="off"
            />
          </form>
        </div>
      </nav>
    </header>
  );
};
