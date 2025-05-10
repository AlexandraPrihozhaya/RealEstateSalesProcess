import styled from 'styled-components';

export const SModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const SModalContent = styled.div`
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 90%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const SCloseButton = styled.button`
    background-color: #ff8a00;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 15px;
    
    &:hover {
        background: #e07b00;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
`;