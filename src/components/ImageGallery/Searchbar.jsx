import {
  Header,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
  SearchIcon,
} from './Gallery.styled';

export const Searchbar = ({ onSubmit }) => {
  const submit = e => {
    e.preventDefault();
    const searchQuery = e.target[1].value.toLowerCase().trim();
    if (searchQuery) {
      onSubmit(searchQuery);
    }
  };
  return (
    <Header>
      <SearchForm onSubmit={submit}>
        <SearchButton type="submit">
          <SearchIcon />
          <SearchLabel>Search</SearchLabel>
        </SearchButton>
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
