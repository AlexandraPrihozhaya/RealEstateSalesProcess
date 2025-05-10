import styled from 'styled-components';
import { IoMdExit } from "react-icons/io";


export const SSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242424;
  padding: 30px 0;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const SA = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.isActive ? '#ff8a00' : '#fff'};
  font-weight: ${props => props.isActive ? '500' : ''};

  &:hover {
    color: #ff8a00;
    cursor: pointer;
  }
`;

export const SSpacer = styled.span`
  margin-bottom: 400px;
`;

export const SImage = styled.img`
  height: 82px;
  margin-bottom: 50px;
`;

export const SExit = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SIoMdExit = styled(IoMdExit)`
  font-size: 21px;
  margin-left: 4px;
`;

export const SADiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;