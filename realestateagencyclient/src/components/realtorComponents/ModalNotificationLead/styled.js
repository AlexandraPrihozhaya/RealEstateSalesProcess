import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    position: relative;
    background: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width: 300px; 
    max-height: 80vh; 
    overflow-y: auto; 
    padding: 15px; 
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
    margin-top: 5px;
`;

export const SDivInput = styled.div`
    margin-bottom: 10px;
    width: 100%;
`;

export const SLabel = styled.label`
    font-size: 16px;
    display: block;
    text-align: start;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`;

export const STextarea = styled.textarea`
    height: 60px;
    background: #fff;
    border: 1px solid #ebebeb;
    padding: 12px 15px;
    margin-top: 5px;
`;

export const SFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;