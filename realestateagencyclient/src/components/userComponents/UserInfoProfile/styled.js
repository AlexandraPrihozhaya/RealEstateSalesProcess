import styled from 'styled-components';
import picture from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture_account1.png"

export const SDiv = styled.div`
    height: 100%;
`;

export const SDivPicture = styled.div`
    height: 100%; /* Высота элемента */
    background-image: url(${picture});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const SDivInput = styled.div`

`;

export const SSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;

    @media screen and (min-width: 1024px) {
        grid-template-columns: 35% 65%;
      }
`;

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-right: 20px;
    background: #fff;
    // border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SInput = styled.input`
    width: 90%;
    background: #f9f9f9;
    border: #ccc 1px solid;
    padding: 12px 15px;
    margin: 5px 0;
    font-size: 16px;
    border-radius: 5px;
    transition: border 0.3s;

    &:focus {
        border-color: #ff8a00;
        outline: none;
    }
`;

export const SLabel = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
`;

export const SButton = styled.button`
    border-radius: 10px;
    border: none;
    background: #ff8a00;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: background 0.3s, transform 80ms ease-in;
    margin: 15px 0;

    &:hover {
        background: #e07b00;
        cursor: pointer;
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        outline: none;
    }
`;