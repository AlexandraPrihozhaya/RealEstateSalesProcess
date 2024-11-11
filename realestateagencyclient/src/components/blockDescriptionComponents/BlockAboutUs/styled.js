import styled from 'styled-components';
import { FaHandPointRight } from "react-icons/fa";
import photo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/aboutcompany.jpg"

export const SSection = styled.section`
  padding: 40px 200px;
`;

export const SDivMain = styled.div`
  box-shadow: 0 4px 8px rgba(72, 72, 72, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

export const SDiv1 = styled.div`
  background: #484848;
`;

export const SDiv2 = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
`;

export const SDiv3 = styled.div`
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 1;
  background-image: url(${photo});
  background-size: cover;
  background-repeat: no-repeat;
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