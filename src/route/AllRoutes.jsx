import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MovieList = lazy(() => import("../pages/MovieList"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const Search = lazy(() => import("../pages/Search"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const AllRoutes = () => (
  <div className="dark:bg-darkbg">
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  </div>
);
