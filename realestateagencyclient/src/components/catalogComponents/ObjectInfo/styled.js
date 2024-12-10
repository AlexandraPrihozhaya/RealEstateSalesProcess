import styled from 'styled-components';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { RiNumbersFill } from "react-icons/ri";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaBuildingCircleCheck } from "react-icons/fa6";

export const SSection = styled.section`
  padding: 0 200px 30px 200px;
`;

export const ImageSlider = styled.div`
  display: flex;
  overflow-x: scroll;
`;


export const SDivContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: repeat(1, 1fr);
    gap: 2px; 
    margin-bottom: 2px;
`;

export const SDivInfo = styled.div`
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

export const SMainImg = styled.img`
    width: 100%;
    height: 450px;
`;

export const SImg = styled.img`
    width: 200px;
    margin-right: 2px;
    cursor: pointer;
    border: 1px transparent solid;
    &:hover {
      border-color: #ff8a00;
    }
`;

export const SH1 = styled.h1`
    font-size: 30px;
    margin-top: 0;
    color: #ff8a00;
`;

export const SP = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

export const SFaMapMarkerAlt = styled(FaMapMarkerAlt)`
    color: #ff8a00;
`;

export const SMdOutlineAttachMoney = styled(MdOutlineAttachMoney)`
    color: #ff8a00;
`;

export const SFaSquareArrowUpRight = styled(FaSquareArrowUpRight)`
    color: #ff8a00;
`;

export const SRiNumbersFill = styled(RiNumbersFill)`
    color: #ff8a00;
`;

export const SPiBuildingApartmentFill = styled(PiBuildingApartmentFill)`
    color: #ff8a00;
`;

export const SFaBuildingCircleCheck = styled(FaBuildingCircleCheck)`
    color: #ff8a00;
`;

export const SButton = styled.button`
    border-radius: 10px;
    border: 1px solid #ff8a00;
    background: #ff8a00;
    color: #fff;
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

export const SText = styled.div`
    font-size: 20px;
    text-align: justify;
`;