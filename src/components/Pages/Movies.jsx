import { Box } from 'components/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovie } from 'components/API/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilmsItem, Form } from 'components/Movies/Movies.styled';

export const Movies = () => {
  const [films, setFilms] = useState(null);
  const [searchParems, setSearchParams] = useSearchParams();
  const [isSubmit, setIsSubmit] = useState(true);
  const location = useLocation();

  const searchUrl = searchParems.get('searchQuery') ?? '';

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

  useEffect(() => {
    if (!isSubmit) {
      return;
    }
    if (!searchUrl) {
      return;
    }
    const controller = new AbortController();

    const fetch = async () => {
      try {
        const response = await searchMovie(searchUrl, controller);
        if (!response.length) {
          notify();
          return;
        }
        setFilms(response);
        setIsSubmit(false);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();

    return () => {
      controller.abort();
    };
  }, [isSubmit, searchUrl]);

  const handleChange = e => {
    setIsSubmit(false);
    const value = e.target.value;
    setSearchParams(value !== '' ? { searchQuery: value } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.elements.searchQuery.value.trim()) {
      notify();
      return;
    }
    setIsSubmit(true);
  };

  return (
    <>
      <Box as="main">
        <Form onSubmit={handleSubmit}>
          <label htmlFor="searchQuery">Search Films</label>
          <input
            id="searchQuery"
            name="searchQuery"
            type="text"
            onChange={handleChange}
            value={searchUrl}
          />
          <button type="submit">Search</button>
        </Form>
        {films && (
          <ul>
            {films.map(({ id, original_title }) => (
              <li key={id}>
                <FilmsItem to={`${id}`} state={{ from: location }}>
                  {original_title}
                </FilmsItem>
              </li>
            ))}
          </ul>
        )}
        <ToastContainer />
      </Box>
    </>
  );
};
