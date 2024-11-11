import styled from 'styled-components';
import minsk from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/minsk.png"

export const SSection = styled.section`

`;

export const SMapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: 420px;
`;

export const SMapOverlay = styled.div`
  grid-row: span 2 / span 2;
  background-size: cover;
  background-image: url(${minsk});
`;

export const SMapText = styled.div`
  grid-row: span 2 / span 2;
  background-color: #f2f2f2;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SMapTitle = styled.h2`
  color: #ff8a00;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const SMapDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

export const SMapList = styled.p`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SLi = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }
`;