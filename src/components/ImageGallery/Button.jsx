import PropTypes from 'prop-types';
import { ButtonMore } from './Gallery.styled';

export const LoadMore = ({ incPage }) => {
  return (
    <ButtonMore type="button" onClick={incPage}>
      Load more
    </ButtonMore>
  );
};

LoadMore.propTypes = {
  incPage: PropTypes.func.isRequired,
};