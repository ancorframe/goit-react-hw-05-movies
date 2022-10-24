import { Box } from 'components/Box';
import { BsArrowLeft } from 'react-icons/bs';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/API/Api';
import { useState, useEffect } from 'react';
import { NotFound } from './NotFound';
import { BackLink, DopLink, Poster } from 'components/Movies/Movies.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [error, setError] = useState(null);

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response);
        return;
      } catch (error) {
        setError(error);
      }
    };
    fetch();
  }, [movieId]);

  if (error) {
    return <NotFound error={error} />;
  }

  if (!movieDetails) {
    return;
  }
  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <Box as="main">
        <BackLink to={location.state?.from ?? '/'}>
          <BsArrowLeft />
          go back
        </BackLink>
        <Box display="flex" mb={24} borderBottom="normal" pb={10}>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
          <Box display="flex" gridGap={10} flexDirection="column">
            <h1>{original_title}</h1>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>genres</h2>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name} </li>
              ))}
            </ul>
          </Box>
        </Box>
        <Box
          display="flex"
          gridGap={10}
          flexDirection="column"
          mb={10}
          pb={10}
          borderBottom="normal"
        >
          <h2>Additional information</h2>
          <DopLink to="cast">cast</DopLink>
          <DopLink to="reviews">reviews</DopLink>
        </Box>
        <Outlet />
      </Box>
    </>
  );
};
