import styled from 'styled-components';

export const SSection = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SDivPictures = styled.div`
  display: inline-block;
  columns: 3;
  width: 100%;
  column-gap: 2px;
`;

export const SA = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    cursor: pointer;
  }
`;