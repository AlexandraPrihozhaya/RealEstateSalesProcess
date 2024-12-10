import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SCard = styled.div`
  border: 1px solid #ededed;
  &:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const SCardImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.img});
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




