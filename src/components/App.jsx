import { Routes, Route, Navigate } from 'react-router-dom';
import { Cast } from './Movies/Cast';
import { Layout } from './Movies/Layout';
import { Reviews } from './Movies/Reviews';
import { lazy } from 'react';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Box } from './Box';

const Movies = lazy(() =>
  import('./Pages/Movies').then(module => ({ default: module.Movies }))
);
const MovieDetails = lazy(() =>
  import('./Pages/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);

export const App = () => {
  return (
    <>
      <Box px={3}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
};
