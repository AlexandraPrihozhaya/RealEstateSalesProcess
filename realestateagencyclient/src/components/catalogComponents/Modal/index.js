import React from 'react';
import { SModal, SModalContent, SCloseButton } from './styled';

const Modal = ({ message, onClose }) => {
    return (
        <SModal>
            <SModalContent>
                <p>{message}</p>
                <SCloseButton onClick={onClose}>Закрыть</SCloseButton>
            </SModalContent>
        </SModal>
    );
};

export default Modal;