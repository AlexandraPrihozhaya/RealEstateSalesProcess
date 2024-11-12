import styled from 'styled-components';
import sell from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/sell.jpg"

export const SSection = styled.div`
    padding: 0 200px;
    text-align: center;
`;

export const SDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

export const SDiv1 = styled.div`
    background: url(${sell});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const SDiv2 = styled.div`
    background: #ebebeb;
    padding: 20px 0;
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
    margin: 0 0 20px 0;

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
    font-size: 28px;
`;