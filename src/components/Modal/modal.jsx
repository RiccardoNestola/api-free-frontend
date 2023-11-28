import React from 'react';
import "./Modal.css"

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <a className="my-button my-button-secondary text-4 m-2" onClick={onClose}>Chiudi</a>
                {children}
            </div>
        </div>
    );
};

export default Modal;
