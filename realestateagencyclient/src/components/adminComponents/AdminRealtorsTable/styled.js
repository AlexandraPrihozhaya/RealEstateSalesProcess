import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

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
    border-color: #ffffff;
    background: none;
    font-size: 15px;
`;

export const SOption = styled.option`

`;

export const SButton = styled.button`
    border: none;
    background: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const STable = styled.table`
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

export const SThead = styled.thead`

`;

export const STr = styled.tr`
    background-color: #ffffff;
    text-align: center;
    color: #000;

    &:hover {
        background-color: #ededed;
    }
`;

export const STh = styled.th`
    background-color: #3b3b3b;
    color: white;
    text-align: center;
    padding: 16px;
`;

export const STbody = styled.tbody`
    color: white;
    text-align: center;
    // border-left: 1px solid #ddd;
    // border-right: 1px solid #ddd;
`;

export const STd = styled.td`
    border-bottom: 1px solid #bfbfbf;
`;

export const SButtonTask = styled.button`
    border: none;
    background: transparent;
    font-size: 24px;

    &:hover {
        cursor: pointer;
    }
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
border: 1px solid #ff8a00 ;
background: #ff8a00 ;
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

export const SLink = styled(Link)`
    color: #000000;
`;

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const SInput = styled.input`
    background: #fff;
    border: #ccc 1px solid;
    padding: 12px 15px;
    margin: 5px 0;
    font-size: 16px;
`;

export const SButtonForm = styled.button`
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

export const SH2 = styled.h2`
    margin-top: 0;
`;

export const SLabel = styled.label`
    display: block;
    font-size: 12px;
    text-align: start;
`;

export const SDivInput = styled.div`

`;