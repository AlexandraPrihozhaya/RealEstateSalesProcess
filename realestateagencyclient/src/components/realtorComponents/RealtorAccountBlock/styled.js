import styled from 'styled-components';
import picture from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture_account.jpg"

export const SSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
`;

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const SInput = styled.input`
    background: #fff;
    border: #ccc 1px solid;
    padding: 12px 15px;
    margin: 8px 0;
    margin: 5px 0;
    font-size: 16px;
`;

export const SLabel = styled.label`
    display: block;
    font-size: 12px;
    text-align: start;
`;

export const SButton = styled.button`
    border-radius: 10px;
    border: 1px solid #ff8a00;
    background: #ff8a00;
    color: #fff;
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

export const SDiv = styled.div`
    height: 100%;
`;

export const SDivPicture = styled.div`
    height: 100%;
    background-image: url(${picture});
`;

export const SDivInput = styled.div`

`;