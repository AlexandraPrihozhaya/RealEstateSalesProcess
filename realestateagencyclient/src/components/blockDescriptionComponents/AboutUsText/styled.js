import styled from 'styled-components';
import { FaHandPointRight } from "react-icons/fa";


export const SDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: center;
`;

export const SDiv1 = styled.div`
    background: #484848;
    width: 100%;
    height: 20%;
`;

export const SDiv2 = styled.div`
    flex-direction: column;
    width: 100%;
    height: 80%;
`;

export const SH1 = styled.h1`
    color: #fff;
    font-size: 38px;
    line-height: 1;
`;

export const SDivText = styled.div`
    margin: 30px;
`;

export const SText = styled.p`
    color: #000;
    font-style: italic;
`;

export const SFaHandPointRight = styled(FaHandPointRight)`
    color: #ff8a00;
`;