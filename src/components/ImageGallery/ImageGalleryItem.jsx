import React from 'react';
import { Image } from './Gallery.styled';
import { Modal } from './Modal';

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  onEsc = e => {
    if (e.code === 'Escape') {
      this.onClose();
    }
  };

  onBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.onClose();
    }
  };

  onOpen = () => {
    this.setState({ showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const data = this.props.data;
    return (
      <>
        <Image src={data.webformatURL} alt={data.tags} onClick={this.onOpen} />
        {this.state.showModal && (
          <Modal data={data} onBackdropClose={this.onBackdropClose} />
        )}
      </>
    );
  }
}
