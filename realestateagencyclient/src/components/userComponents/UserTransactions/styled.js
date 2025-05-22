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