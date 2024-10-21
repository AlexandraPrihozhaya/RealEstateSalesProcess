import styled from 'styled-components';
import Slider from "react-slick";

export const SSection = styled.section`
  position: relative;
  width: 100%;
`;

export const SSlider = styled(Slider)`

`;

export const SSlide = styled.div`
  position: relative;
  height: 600px;
`;

export const SSlideContent = styled.div`
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  max-width: 80%;
  height: 100%;
  width: 400px;
`;

export const STitle = styled.h2`

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
