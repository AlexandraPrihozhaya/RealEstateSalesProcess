import styled from 'styled-components';
import { FaHandHoldingHeart } from "react-icons/fa6";

export const SDiv = styled.div`
    background-image: url(${(props) => props.picture});
    width: 360px;
    height: 360px;  
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 15px;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SFaHandHoldingHeart = styled(FaHandHoldingHeart)`
  font-size: 140px;
  color: rgba(255, 255, 255, 0.7);
`;

export const SH1 = styled.h1`
    text-transform: uppercase;
    font-size: 30px;
    color: #ffffff;
`;