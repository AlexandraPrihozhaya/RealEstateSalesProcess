import styled from 'styled-components';
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
    background-color: ${({ status }) => 
        status === true ? '#d4edda' : 
        status === false ? '#f8d7da' : 
        '#ffffff' 
    };
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

export const SLink = styled(Link)`
    color: #000000;
`;




export const SSpan = styled.span`
    cursor: pointer;

    &:hover {
        color: #ff8a00; 
    }
`;




export const Button = styled.button`
    padding: 10px 15px;
    border: none;

    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.9; 
    }
`;

export const AcceptButton = styled(Button)`
    background-color: #20a820;
    padding: 6px 10px;
    border: none;

    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

    &:hover {
        opacity: ${props => props.disabled ? 0.5 : 0.9}; 
    } 
`;

export const RejectButton = styled(Button)`
    background-color: #B22222;
    padding: 6px 10px;
    border: none;
 
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

    &:hover {
        opacity: ${props => props.disabled ? 0.5 : 0.9}; 
    } 
`;