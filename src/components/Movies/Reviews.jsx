import { Box } from 'components/Box';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/Api';
import { useState, useEffect } from 'react';
import { ReviewsItem } from './Movies.styled';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  if (!reviews.length) {
    return (
      <Box>
        <h3>We don`t have any reviews for this movie.</h3>
      </Box>
    );
  }
  return (
    <Box>
      <ul>
        {reviews.map(data => (
          <ReviewsItem key={data.id}>
            <Review data={data} />
          </ReviewsItem>
        ))}
      </ul>
    </Box>
  );
};

const Review = ({ data }) => {
  const { author_details, content } = data;
  return (
    <>
      <Box display="flex" gridGap={10} flexDirection="column">
        <p>Author: {author_details.name}</p>
        <p>{content}</p>
      </Box>
    </>
  );
};
