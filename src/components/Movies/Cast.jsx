import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/API/Api';
import { useState, useEffect } from 'react';
import { ActorImg, CastItem} from './Movies.styled';
import { Box } from 'components/Box';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);


  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  if (!cast.length) {
    return (
      <Box>
        <h3>We don`t have any actors for this movie.</h3>
      </Box>
    );
  }

  return (
    <ul>
      {cast.map(data => (
        <CastItem key={data.id}>
          <Lol data={data} />
        </CastItem>
      ))}
    </ul>
  );
};

const Lol = ({ data }) => {
  const { character, original_name, profile_path } = data;
  
  return (
    <>
      <ActorImg
        src={
          profile_path !== null
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : 'https://www.naplesgarden.org/wp-content/themes/naples_botanical/img/notfound.jpg'
        }
        alt={original_name}
      />
      <p>{original_name}</p>
      <p>{character}</p>
    </>
  );
};
