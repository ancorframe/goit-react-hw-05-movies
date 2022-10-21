import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
  SearchIcon,
} from './Gallery.styled';
  import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmit }) => {

const notify = () =>
  toast.warn('Please enter valis seach query', {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });


  const submit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value
      .toLowerCase()
      .trim();
    if (!searchQuery) {
      notify()
      return
    }
    onSubmit(searchQuery);
    e.target.elements.searchQuery.value = '';
  };
  return (
    <>
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
      <ToastContainer />
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
