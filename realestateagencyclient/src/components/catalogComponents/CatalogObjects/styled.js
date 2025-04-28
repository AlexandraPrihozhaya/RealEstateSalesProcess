import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SCard = styled.div`
  border: 1px solid #ededed;
  &:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const SCardContent = styled.div`
  margin: 15px;
`;

export const SCardTitle= styled(Link)`
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical; 
  font-size: 24px; 
  text-decoration: none;
  color: #000;
  &:hover{
    color: #ff8a00;
  }
`;

export const SCardDetails = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

export const SCardPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const SSpan = styled.span`
  font-weight: 300;
`;

export const SP = styled.p`

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