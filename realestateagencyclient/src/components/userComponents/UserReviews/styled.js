import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SSection = styled.section`
    padding: 30px;
`;

export const SPaginationContainer = styled.div`
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    right: 0;
`;

export const SDivPages = styled.div`
    margin-right: 30px;
`;

export const SDivCount = styled.div`
    margin-right: 30px;
`;

export const SDivList = styled.div`

`;

export const SText = styled.text`
    margin-right: 8px;
`;

export const SSelect = styled.select`
    border-color: #e5e5e5;
    background: none;
    font-size: 15px;
`;

export const SOption = styled.option`

`;

export const SButton = styled.button`
    border: none;
    background: #e5e5e5;

    &:hover {
        cursor: pointer;
    }
`;


export const SDivText = styled.div`
  text-align: center;
  padding: 70px;
`;


export const SCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px; // Пробел между карточками
`;

export const SCard = styled.div`
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: calc(50% - 10px);
    box-sizing: border-box;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.01);
    }
`;

export const SCardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SCardName = styled.p`
    margin: 0 0 8px;
    font-weight: bold;
    color: #555;
`;

export const SCardDetails = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: #333;

    p {
        margin: 4px 0;
    }
`;

export const SStars = styled.div`
  margin-bottom: 8px;
`;

export const SCardText = styled.text`

`;

export const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ff8a00;
  // font-size:24px;
`;
