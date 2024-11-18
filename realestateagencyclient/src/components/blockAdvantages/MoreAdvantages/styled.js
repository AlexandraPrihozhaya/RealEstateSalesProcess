import styled from 'styled-components';

export const SSection = styled.section`
`;

export const SMainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const SDiv13 = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

export const SDiv68 = styled.div`
  grid-row-start: 2;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const SDiv24 = styled.div`
  background-image: url(${(props) => props.link});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SDiv57 = styled.div`
  grid-row-start: 2;
  background-image: url(${(props) => props.link});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SH3 = styled.h3`

`;

export const SText = styled.p`

`;