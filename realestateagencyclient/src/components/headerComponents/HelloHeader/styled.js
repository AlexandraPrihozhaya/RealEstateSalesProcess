import styled from 'styled-components';
import pxfuel from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/pxfuel1.jpg"


export const SSection = styled.section`
  vertical-align: middle;
  display: flex;
  background-image: url(${pxfuel});
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  padding: 40px 200px;
`;

export const SH1 = styled.h1`
  width: 600px;
  font-size: 30px;
  color: #ffffff;
`;

export const SP = styled.p`
  font-size: 16px;
  color: #ffffff;
`;