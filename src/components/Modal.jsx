import React from 'react';
import '../css/Modal.css';
import Form from '../components/Form';

const Modal = ({ isOpen, closeModal, bookIndex, book  }) => {
    const handleClose = () => {
      closeModal();
    };
    if (!isOpen) {
        return null; // Render nothing if the modal is closed
    }
  
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <Form formHeading="Update Book" btnName="update" calledTo="updateBooks" {...(isOpen ? { book: book } : {})} id={bookIndex} />
        </div>
      </div>
    );
  };

export default Modal;