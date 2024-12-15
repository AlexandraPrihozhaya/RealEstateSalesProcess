import styled from 'styled-components';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export const SSection = styled.section`
  position: relative;
  width: 100%;
`;

export const SSlider = styled(Slider)`

`;

export const SSlide = styled.div`
  height: 670px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SSlideContent = styled.div`
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  width: 400px;
  margin: 160px 38%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const STitle = styled.h2`
  font-size: 34px;
`;

export const SText = styled.p`

`;

export const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SArrow = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;

  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
    outline: none;
  }

  &:hover {
    outline: none;
    background-color: rgba(255, 255, 255, 0.7);
  }

  padding: 15px;
  width: 40px;
  height: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 10px;
  }

  ${({ direction }) =>
    direction === 'left' &&
    `
      left: 10px;
      &::before {
        border-color: transparent black transparent transparent;
        margin-left: -5px;
      }
    `}

  ${({ direction }) =>
    direction === 'right' &&
    `
      right: 10px;
      &::before {
        border-color: transparent transparent transparent black;
        margin-left: 5px;
      }
    `}
`;

export const SDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);  

  li {
    margin: 0 5px;

    button {
      background: #ffffff;
      border: none;
      border-radius: 50%;
    }
  }

  li.slick-active {
    margin: 0 5px;

    button {
      background: #ff8a00;
    }
  }
`;

export const SButton = styled.button`
    border-radius: 10px;
    border: 1px solid #ff8a00;
    background: #fff;
    color: #ff8a00;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 15px 0;

    &:active {
        transform: scale(.95);
    }

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
    
`;

export const SLink = styled(Link)`
    text-decoration: none;
    color: #ff8a00;
`;