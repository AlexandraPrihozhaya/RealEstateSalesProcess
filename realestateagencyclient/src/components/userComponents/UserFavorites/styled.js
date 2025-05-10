import styled from 'styled-components';

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
    gap: 12px; // Пробел между карточками
`;