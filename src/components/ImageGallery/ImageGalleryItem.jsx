import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Image } from './Gallery.styled';
import { Modal } from './Modal';

export const ImageGalleryItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', onEsc);
    }

    return () => {
      if (showModal) {
        window.removeEventListener('keydown', onEsc);
      }
    };
  }, [showModal]);

  const onEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onOpen = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Image src={data.webformatURL} alt={data.tags} onClick={onOpen} />
      {showModal && <Modal data={data} onBackdropClose={onBackdropClose} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
};
