import styled from 'styled-components';
import { IoMdExit } from "react-icons/io";

export const SADiv = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  padding: 12px 16px;
  display: block;
  cursor: pointer;

  &:hover {
    color: #ff8a00;
  }
`;

export const SExit = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SIoMdExit = styled(IoMdExit)`
  font-size: 21px;
  margin-left: 4px;
`;

export const SHr = styled.hr`

`;