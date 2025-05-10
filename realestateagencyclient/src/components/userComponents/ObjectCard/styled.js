import styled from 'styled-components';

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

export const SDivFav = styled.div`

`;

export const SCardDiv = styled.div`

`;