import { ButtonMore } from './Gallery.styled';

export const LoadMore = ({ incPage }) => {
  return (
    <ButtonMore type="button" onClick={() => incPage()}>
      Load more
    </ButtonMore>
  );
};
