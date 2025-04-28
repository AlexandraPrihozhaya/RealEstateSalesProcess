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

export const SCard = styled.div`
    background-color: #ffffff;
    border: 1px solid #ddd;
    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: calc(33.33% - 10px); // Ширина карточки, 3 карточки в ряд
    box-sizing: border-box;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.01);
    }
`;

export const SCardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export const SCardTitle = styled.h3`
    margin: 0;
    font-size: 18px;
`;

export const SCardType = styled.p`
    font-weight: bold;
    color: #555;
`;

export const SCardDetails = styled.div`
    font-size: 14px;
    color: #333;

    p {
        margin: 4px 0;
    }
`;

export const SImg = styled.img`

`;

export const StyledButton = styled.div`
    color: #000000;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;

    &:hover {
        opacity: 0.7;
    }
`;

export const CustomPrevButton = styled(StyledButton)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

export const CustomNextButton = styled(StyledButton)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

export const StyledSwiperPagination = styled.div`
    .swiper-pagination {
        bottom: 10px;
    }

    .swiper-pagination-bullet {
        background: #757575;
        opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
        background: #000000;
        opacity: 1;
    }
`;