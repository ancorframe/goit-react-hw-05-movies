import React from 'react';
import { Searchbar } from './Searchbar';
import { GetImage } from './Api';
import { ImageGallery } from './ImageGallery';
import { LoadMore } from './Button';
import { Loader } from './Loader';
import Scroll from 'react-scroll';
import { Box } from 'components/Box';

export class Gallery extends React.Component {
  state = {
    data: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.setState({ status: 'loading' });
      try {
        const response = await GetImage(searchQuery, page);
        if (!response.length) {
          return this.setState({ status: 'error' });
        }
        this.setState(prev => ({ data: prev.data.concat(response) }));
        this.setState({ status: 'loadmore' });
        this.scroll();
      } catch (error) {
        this.setState({ status: 'error' });
      }
    }
  }

  scroll = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(600);
  };

  onSubmit = value => {
    this.setState({ searchQuery: value, page: 1, data: [] });
  };

  incrementPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { status } = this.state;
    if (status === 'idle') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
        </>
      );
    }
    if (status === 'loading') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery data={this.state.data} />
          <Loader />
        </>
      );
    }
    if (status === 'loadmore') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery data={this.state.data} />
          <LoadMore incPage={this.incrementPage} />
        </>
      );
    }
    if (status === 'error') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
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
        </>
      );
    }
  }
}
