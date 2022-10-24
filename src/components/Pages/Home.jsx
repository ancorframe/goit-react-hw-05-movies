import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/Api';
import { useLocation } from 'react-router-dom';
import { FilmsItem } from 'components/Movies/Movies.styled';

export const Home = () => {

  const [trends, setTrends] = useState([]);
  const location = useLocation()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getTrending();
        setTrends(response);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Box as="main">
      <h1>Trending today</h1>
      <ul>
        {trends.map(({ id, original_title }) => (
          <li key={id}>
            <FilmsItem to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </FilmsItem>
          </li>
        ))}
      </ul>
    </Box>
  );
};
