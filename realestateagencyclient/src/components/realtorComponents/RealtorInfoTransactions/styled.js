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

export const SSpan = styled.span`
    cursor: pointer;

    &:hover {
        color: #ff8a00; 
    }
`;

export const Button = styled.button`
    background-color: #ff8a00;
    padding: 6px 10px;
    border: none;

    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

export const SDivStages = styled.div`
    display: grid; 
    grid-template-columns: repeat(5, 1fr); 
    gap: 10px;
`;

export const SStages = styled.text`

`;

export const SList = styled.div`
    margin-bottom: 20px;
`;

export const SStagesButton = styled.button`
    background-color: #ff8a00;
    padding: 6px 10px;
    border: none;

    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
`;

export const SHr = styled.hr`
    align: center; 
    width: 500; 
    size: 2; 
    color: #ff0000;
`;