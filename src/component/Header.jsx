import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/img_logo.jpg";

export const Header = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
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

  const closeMenu = () => setMenuOpen(false);

  const activeClass = "text-gray-300 dark:text-white font-semibold";
  const inActiveClass =
    "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white";

  const NavigationLinks = ({ isMobile = false }) => (
    <ul className={`flex ${
      isMobile ? "flex-col space-y-2 text-gray-800" : "space-x-8 text-white"
    }`}>
      <li>
        <NavLink to="/" end onClick={isMobile ? closeMenu : undefined}className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies/popular" onClick={isMobile ? closeMenu : undefined}className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Popular</NavLink>
      </li>
      <li>
        <NavLink to="/movies/top" onClick={isMobile ? closeMenu : undefined}className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Top Rated</NavLink>
      </li>
      <li>
        <NavLink to="/movies/upcoming" onClick={isMobile ? closeMenu : undefined} className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Upcoming</NavLink>
      </li>
    </ul>
  );

  return (
    <header className="bg-purple-400 dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50">
      <nav className="container flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-2" alt="Logo" />
          <span className="text-xl font-bold dark:text-red-500">Cinema Guide</span>
        </Link>

        <div className="hidden md:flex justify-center">
          <NavigationLinks />
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl" title="Toggle Theme">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 dark:text-white text-xl">
            {menuOpen ? "Ⅹ" : "☰"}
          </button>
        </div>

        <div className={`w-full md:hidden mt-4 ${menuOpen ? "block" : "hidden"}`}>
          <NavigationLinks isMobile />
        </div>

        <div className={`w-full md:w-80 md:flex md:items-center ${menuOpen ? "" : "hidden"} md:block mt-4 md:mt-0`}>
          <form onSubmit={handleSearch}>
            <input name="search" type="text" placeholder="Search..." className="p-2 rounded-lg border w-full md:w-72 dark:bg-gray-700 dark:text-white" autoComplete="off"/>
          </form>
        </div>
      </nav>
    </header>
  );
};
