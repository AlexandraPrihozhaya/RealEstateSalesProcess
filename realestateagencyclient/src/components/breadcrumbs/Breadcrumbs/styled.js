import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding-left: 0;
`;

export const SLi = styled.li`
  list-style-type: none;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 300;
  font-size: 16px;

  &:hover {
    color: #ff8a00;
  }
`;

export const SDiv = styled.div`
  margin: 40px 200px;
`;

