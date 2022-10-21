import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar';
import { GetImage } from './Api';
import { ImageGallery } from './ImageGallery';
import { LoadMore } from './Button';
import { Loader } from './Loader';
import Scroll from 'react-scroll';
import { Box } from 'components/Box';

export const Gallery = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');


  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const get = async () => {
      setStatus('loading');
      try {
        const response = await GetImage(searchQuery, page);
        if (!response.length) {
          return setStatus('error');
        }
        setData(prev => prev.concat(response));
        setStatus('loadmore');
        scroll();
      } catch (error) {
        setStatus('error');
      }
    };
    get();
  },[page, searchQuery] );

  const scroll = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(600);
  };

  const onSubmit = value => {
    setData([]);
    setPage(1);
    setSearchQuery(value);
  };

  const incrementPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
       <ImageGallery data={data} />
      {status === 'loading' && <Loader />}
      {status === 'loadmore' && <LoadMore incPage={incrementPage} />}
      {status === 'error' && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gridGap={3}
          pt={5}
        >
          <p>
            Ups.. Searchquery is not valid or something wrong(( Please try
            again.
          </p>
        </Box>
      )}
      
    </>
  );

};

