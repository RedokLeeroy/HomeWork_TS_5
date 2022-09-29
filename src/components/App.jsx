import LoaderSpinner from "./Loader/Loader";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { GoHomePage } from "./GoHomePage/GoHomePage";

const MovieDetailsLazy = lazy(() => import("../Pages/MovieDetails"));
const MovieSearchLazy = lazy(() => import("../Pages/MovieSearch"));
const LayoutLazy = lazy(() => import("./Layout"));
const TrendLazy = lazy(() => import("../Pages/Trends"));
const CastLazy = lazy(() => import("./Cast"));
const ReviewsLazy = lazy(() => import("./Reviews"));

export const App = () => {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route path="/" element={<LayoutLazy />}>
          <Route index element={<TrendLazy />} />
          <Route path="/movies" element={<MovieSearchLazy />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsLazy />}>
            <Route path="cast" element={<CastLazy />} />

            <Route path="reviews" element={<ReviewsLazy />} />
          </Route>
        </Route>
        <Route path="*" element={<GoHomePage />} />
      </Routes>
    </Suspense>
  );
};
