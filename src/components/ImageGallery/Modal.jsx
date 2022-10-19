import React from 'react';
import * as ReactDOM from 'react-dom';
import { Overlay, ModalContainer } from './Gallery.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ data, onBackdropClose }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={e => onBackdropClose(e)}>
      <ModalContainer>
        <img src={data.largeImageURL} alt={data.tags} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
