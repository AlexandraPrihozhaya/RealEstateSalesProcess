import React from 'react';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    position: relative;
    background: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    max-width: 600px; 
    max-height: 80vh; 
    overflow-y: auto; 
    padding: 15px; 
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
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


export const SCardContent = styled.div`
  margin: 15px;
`;

export const SCardTitle= styled.h1`
  font-size: 24px; 
  font-weight: 600;
  margin: 0 0 30px 0;
`;

export const SCardDetails = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

export const SCardPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const SP = styled.p`

`;