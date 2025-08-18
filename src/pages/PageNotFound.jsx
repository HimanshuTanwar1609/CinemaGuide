import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../component/Button";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found / Cinema Guide";
  }, []);

  return (
    <main className="min-h-screen bg-black text-black flex flex-col justify-center items-center px-4 py-10">
      <p className="text-7xl font-bold mb-10">404, Oops!</p>
      <img
        className="max-w-lg rounded mb-10"
        src={PageNotFoundImage}
        alt="404 Page Not Found"
      />
      <Link to="/">
        <Button>Back To Cinemate</Button>
      </Link>
    </main>
  );
};
