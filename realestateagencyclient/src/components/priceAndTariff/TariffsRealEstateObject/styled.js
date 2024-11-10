import styled from 'styled-components';

export const SH3 = styled.h4`
  text-align: justify;
`;

export const STable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: separate;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  background: #fff!important;
  overflow: hidden;
`;

export const STHead = styled.thead`

`;

export const STH = styled.th`
  font-weight: normal;
  padding: 12px 16px;
  background: #ff8a00;
  color: #fff;
  border: none;
  text-align: left;
  font-size: 16px;
`;

export const STR = styled.tr`
  &:nth-child(even) {
    background: #f8f8f8;
  }
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const STBody = styled.tbody`

`;

export const STD = styled.td`
  padding: 10px 16px;
  border: none;
  border-top: 1px solid #ddd;
  font-size: 14px;
`;

export const SColspan = styled.td`
  padding: 10px 16px;
  border: none;
  border-top: 1px solid #ddd;
  font-size: 16px;
  background-color: #f2b774;
  text-align: center;
  color: #ffffff;
`;

export const SP = styled.p`
  text-align: justify;
`;