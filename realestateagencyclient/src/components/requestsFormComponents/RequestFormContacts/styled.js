import styled from 'styled-components';
import picture from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/form_contacts.jpg"


export const SSection = styled.div`
    background-image: url(${picture});
    background-size: cover;
    padding-bottom:  50px;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    text-align: center;
`;

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const SInput = styled.input`
    background: #fff;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 20%;
    margin: 5px 0;
`;

export const STextArea = styled.textarea`
    background: #fff;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 20%;
    margin: 5px 0;
`;

export const SButton = styled.button`
    border-radius: 10px;
    border: 1px solid #ff8a00;
    background: #fff;
    color: #ff8a00;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 15px 0;

    &:active {
        transform: scale(.95);
    }

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
    
`;

export const SH1 = styled.h1`
    font-size: 40px;
    color: #fff;
`;

export const SText = styled.p`
    font-size: 20px;
    color: #fff;
    margin-bottom: 40px;
`;