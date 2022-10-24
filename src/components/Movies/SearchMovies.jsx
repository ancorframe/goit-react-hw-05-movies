import { Box } from 'components/Box';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovie } from 'components/API/Api';

import { useFormik } from 'formik';

export const SearchMovies = () => {

  const [films, setFilms] = useState(null);
    const [searchParems, setSearchParams] = useSearchParams();
    
  const searchUrl = searchParems.get('searchQuery') ?? '';

  const formik = useFormik({
    initialValues: {
      searchQuery: searchUrl,
    },
      onSubmit: () => {
        setSearchParams(
          formik.values.searchQuery.trim() !== '' ? formik.values : {}
        );
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (!formik.isSubmitting) {
      return;
    }
    const fetch = async () => {
      try {
        const response = await searchMovie(formik.values.searchQuery.trim());
        console.log('response', response);
        setFilms(response);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [formik.isSubmitting, formik.values.searchQuery]);


  return (
    <>
      <Box as="main">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="searchQuery">Search Films</label>
          <input
            id="searchQuery"
            name="searchQuery"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.searchQuery}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {films &&
            films.map(({ id, original_title }) => (
              <li key={id}>
                <NavLink to={`${id}`}>{original_title}</NavLink>
              </li>
            ))}
        </ul>
      </Box>
    </>
  );
};
