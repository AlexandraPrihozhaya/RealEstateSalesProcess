import styled from 'styled-components';


export const SSection = styled.section`
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

export const SA = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #ff8a00;
  }
`;

export const SSpacer = styled.span`
  margin-left: 50px;
`;

export const SDivDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const SDivContent = styled.div`
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const SADiv = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  padding: 12px 16px;
  display: block;

  &:hover {
    color: #ff8a00;
  }
`;