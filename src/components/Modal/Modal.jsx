import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalContainer } from './Modal.styled';
import ModalCard from "../ModalCard/ModalCard";
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, car }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalCard car={car} onClose={onClose} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
export default Modal;