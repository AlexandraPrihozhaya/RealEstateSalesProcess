import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";

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

export const SText = styled.span`
    margin-right: 8px;
`;

export const SSelect = styled.select`
    border-color: #e5e5e5;
    background: none;
    font-size: 15px;
`;

export const SOption = styled.option``;

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

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const STHead = styled.thead`
    background-color: #e07b00;
    color: white; 
`;

export const STHeadRow = styled.tr``;

export const STH = styled.th`
    padding: 12px; 
    text-align: left;
    border-bottom: 2px solid #ff8a00; 
    font-weight: 400; 
`;

export const STBody = styled.tbody``;

export const STR = styled.tr`
    &:nth-child(even) {
        background-color: #ecf0f1; 
    }
    &:hover {
        background-color: #d5dbdb; 
    }
`;

export const STD = styled.td`
    padding: 12px; 
    border-bottom: 1px solid #ddd;
`;

export const SButtonTask = styled.button`
    border: none;
    background: transparent;
    color: #545454;
    font-size: 24px;
    cursor: pointer;
    
    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

export const SModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;
`;

export const SDialog = styled.div`
width: 100%;
max-width: 550px;
padding: 30px;
background: white;
position: relative;
margin: 0 20px;
text-align: center;
display: flex;
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
-webkit-animation-name: animatetop;
-webkit-animation-duration: 0.4s;
animation-name: slide-in;
animation-duration: 0.5s;
`;

export const SBtns = styled.div`
display: flex;
flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const SAiOutlineClose = styled(AiOutlineClose)`
margin-bottom: 20px;
float: right;

&:hover {
    cursor: pointer;
}
font-size: 18px;
`;

export const SClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SButtonModal = styled.button`
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