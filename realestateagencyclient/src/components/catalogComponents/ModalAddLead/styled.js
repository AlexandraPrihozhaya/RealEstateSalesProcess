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
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SButton = styled.button`
    background-color: #ff8a00;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 15px;
    margin-top: 16px;

    &:hover {
        background: #e07b00;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
`;

export const SForm = styled.form`
    width: 100%;
`;

export const SFormData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
`;

export const SInput = styled.input`
    background: #fff;
    border: 1px solid #ebebeb;
    padding: 12px 15px;
    width: 90%;
    margin: 5px 0;
`;

export const SDivInput = styled.div`
    margin-bottom: 5px;
    width: 100%;
`;

export const SLabel = styled.label`
    font-size: 16px;
    display: block;
    text-align: start;
`;